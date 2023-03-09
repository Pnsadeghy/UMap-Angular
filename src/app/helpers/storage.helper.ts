export const setLocationStore = (data: any, localStorageKey: string): any => {
  localStorage.setItem(localStorageKey, JSON.stringify(data));
}
export const getLocationStore = (localStorageKey: string): any => {
  // @ts-ignore
  return JSON.parse(localStorage.getItem(localStorageKey));
}
