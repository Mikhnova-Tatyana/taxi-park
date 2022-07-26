import { TCar } from '../../../types/types';

export type TCarsState = {
  cars: TCar[];
  loading: boolean;
};

type TFetchCarsAction = {
  type: CarActionTypes.FETCH_CARS;
  payload: TCar[];
};

type TAddCarAction = {
  type: CarActionTypes.ADD_CAR;
  payload: TCar;
};

type TUpdateCarAction = {
  type: CarActionTypes.UPDATE_CAR;
  payload: TCar;
};

type TRemoveCarAction = {
  type: CarActionTypes.REMOVE_CAR;
  payload: TCar['id'];
};

type TRemoveDriverCars = {
  type: CarActionTypes.REMOVE_DRIVER_CARS;
  payload: TCar['driver_id'];
};

export type TCarAction =
| TFetchCarsAction
| TAddCarAction
| TUpdateCarAction
| TRemoveCarAction
| TRemoveDriverCars;

export enum CarActionTypes {
  FETCH_CARS = 'FETCH_CARS',
  ADD_CAR = 'ADD_CAR',
  UPDATE_CAR = 'UPDATE_CAR',
  REMOVE_CAR = 'REMOVE_CAR',
  REMOVE_DRIVER_CARS = 'REMOVE_DRIVER_CARS',
}
