export const setLocationStore = (state: any, localStorageKey: string): any => {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}
export const getLocationStore = (localStorageKey: string): any => {
  // @ts-ignore
  return JSON.parse(localStorage.getItem(localStorageKey));
}
