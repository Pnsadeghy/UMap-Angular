import {ILocationDetail} from "./ILocationDetail";

export interface ILocation {
  id: number;
  name: string;
  location: ILocationDetail,
  type: string;
  logo: string;
}
