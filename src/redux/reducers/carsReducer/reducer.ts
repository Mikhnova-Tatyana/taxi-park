import { TCarsState, TCarAction, CarActionTypes } from './types';

const initialState: TCarsState = {
  cars: [
    {
      id: 1,
      model: 'TT',
      mark: 'audi',
      number: '12345678',
      year: 2015,
      driver_id: 1,
      status: {
        title: 'Стандарт',
        code: 'standart',
      },
    },
    {
      id: 2,
      model: 'duster',
      mark: 'renault',
      number: '12345678',
      year: 2018,
      driver_id: 2,
      status: {
        title: 'Стандарт',
        code: 'standart',
      },
    },
    {
      id: 4,
      model: 'duster',
      mark: 'renault',
      number: '12345678',
      year: 2018,
      driver_id: 2,
      status: {
        title: 'Стандарт',
        code: 'standart',
      },
    },
  ],
  loading: false,
};

function carsReducer(state = initialState, action: TCarAction): TCarsState {
  switch (action.type) {
    case CarActionTypes.FETCH_CARS:
      return {
        ...state,
        cars: [...state.cars, ...action.payload],
      };
    case CarActionTypes.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    case CarActionTypes.UPDATE_CAR:
      return {
        ...state,
        cars: [
          ...state.cars,
          Object.assign(
            {},
            ...state.cars.filter((car) => car.id === action.payload.id),
            action.payload,
          ),
        ],
      };
    case CarActionTypes.REMOVE_CAR:
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    case CarActionTypes.REMOVE_DRIVER_CARS:
      return {
        ...state,
        cars: state.cars.filter((car) => car.driver_id !== action.payload),
      };
    default:
      return state;
  }
}

export default carsReducer;
