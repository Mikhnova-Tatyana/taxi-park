import { DriverActionTypes } from './types';
import { TDriver, TDriverRequest } from '../../../types/types';

export const fetchDrivers = (payload: TDriver[]) => (
  { type: DriverActionTypes.FETCH_DRIVERS, payload });
export const addDriver = (payload: TDriver) => (
  { type: DriverActionTypes.ADD_DRIVER, payload });
export const updateDriver = (payload: TDriverRequest) => (
  { type: DriverActionTypes.UPDATE_DRIVER, payload });
export const removeDriver = (payload: TDriver['id']) => (
  { type: DriverActionTypes.REMOVE_DRIVER, payload });
