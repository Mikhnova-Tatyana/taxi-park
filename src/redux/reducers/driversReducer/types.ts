import { TDriver, TDriverRequest } from '../../../types/types';

export type TDriversState = {
  drivers: TDriver[];
  loading: boolean;
};

export type TFetchDriversAction = {
  type: DriverActionTypes.FETCH_DRIVERS;
  payload: TDriver[];
};

export type TAddDriverAction = {
  type: DriverActionTypes.ADD_DRIVER;
  payload: TDriver;
};

export type TUpdateDriverAction = {
  type: DriverActionTypes.UPDATE_DRIVER;
  payload: TDriver;
};

export type TRemoveDriverAction = {
  type: DriverActionTypes.REMOVE_DRIVER;
  payload: TDriver['id'];
};

export type TDriverAction =
  | TFetchDriversAction
  | TAddDriverAction
  | TUpdateDriverAction
  | TRemoveDriverAction;

export enum DriverActionTypes {
  FETCH_DRIVERS = 'FETCH_DRIVERS',
  ADD_DRIVER = 'ADD_DRIVER',
  UPDATE_DRIVER = 'UPDATE_DRIVER',
  REMOVE_DRIVER = 'REMOVE_DRIVER',
}
