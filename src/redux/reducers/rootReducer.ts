import { combineReducers } from 'redux';
import driversReducer from './driversReducer/reducer';
import carsReducer from './carsReducer/reducer';
import menuReducer from './menuReducer/reducer';

export const rootReducer = combineReducers({
  drivers: driversReducer,
  cars: carsReducer,
  menu: menuReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
