import { CarActionTypes } from './types';
import { TCar } from '../../../types/types';

export const fetchCars = (payload: TCar[]) => (
  { type: CarActionTypes.FETCH_CARS, payload });
export const addCar = (payload: TCar) => (
  { type: CarActionTypes.ADD_CAR, payload });
export const updateCar = (payload: TCar) => (
  { type: CarActionTypes.UPDATE_CAR, payload });
export const removeCar = (payload: TCar['id']) => (
  { type: CarActionTypes.REMOVE_CAR, payload });
export const removeDriverCars = (payload: TCar['driver_id']) => (
  { type: CarActionTypes.REMOVE_DRIVER_CARS, payload });
