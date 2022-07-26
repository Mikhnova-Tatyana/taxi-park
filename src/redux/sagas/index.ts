import {
  takeEvery, put, call, fork,
} from 'redux-saga/effects';
import { DriverActionTypes } from '../reducers/driversReducer/types';
import { CarActionTypes } from '../reducers/carsReducer/types';

async function fetchData(pattern: string) {
  const request = await fetch(`https://edu.evgeniychvertkov.com/v1/${pattern}`, {
    method: 'GET',
    headers: {
      'X-Authorization': 'apib7291d02b2745c94724773d7ece5337187ccf8576914ce7b14583a2dcb6dd766',
    },
  });
  const response = await request.json();
  return response;
}

export function* loadDrivers() {
  const drivers = yield call(fetchData, 'drivers');
  yield put({ type: DriverActionTypes.FETCH_DRIVERS, payload: drivers.data });
  console.log('load drivers');
}

export function* loadCars() {
  const cars = yield call(fetchData, 'cars');
  yield put({ type: CarActionTypes.FETCH_CARS, payload: cars.data });
  console.log('load cars');
}

export function* workerSaga() {
  console.log('run parallel tasks');
  yield fork(loadDrivers);
  yield fork(loadCars);
  console.log('finish parallel tasks');
}

export function* watchLoadDataSaga() {
  yield takeEvery('LOAD_DATA', workerSaga);
}

export function* rootSaga() {
  yield fork(watchLoadDataSaga());
}
