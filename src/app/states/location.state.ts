import {Action, createAction, createFeatureSelector, createReducer, createSelector, on, props} from '@ngrx/store';
import {ILocation} from "../interfaces/ILocation";
import {getLocationStore} from "../helpers/storage.helper";

const storeKey = "users-location-list";

// interfaces
export interface ILocationState {
  list: ILocation[];
}

export interface AddNewLocationPayload {
  item: ILocation;
}
export interface UpdateLocationPayload {
  item: ILocation;
}

// actions
export const AddNewLocation = createAction("[Location detail] stores", props<AddNewLocationPayload>());
export const UpdateLocation = createAction("[Location detail] updated", props<UpdateLocationPayload>());

// reducer
export const initialState: ILocationState = {
  list: getLocationStore(storeKey) || []
};
export const addToListReducer = createReducer(
  initialState,
  on(AddNewLocation, (state, { item }) => ({ ...state, list: [...state.list, item] })),
  on(UpdateLocation, (state, { item }) => {
    const index = state.list.findIndex(i => i.id === item.id);
    const list = [...state.list];
    list[index] = item;
    return {list};
  })
);

// selectors
export const LOCATION_NAME = "location";
const locationSelector = createFeatureSelector<ILocationState>(LOCATION_NAME);
export const selectLocationList = createSelector(locationSelector, (state) => state.list);

export function locationReducer(state: ILocationState | undefined, action: Action) {
  return addToListReducer(state, action);
}
