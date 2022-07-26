import { TDriversState, DriverActionTypes, TDriverAction } from './types';

const initialState: TDriversState = {
  drivers: [{
    id: 1,
    first_name: 'John',
    last_name: 'Smith',
    date_created: 1655913802000,
    date_birth: 1655908548000,
    status: {
      title: 'Уволенный',
      code: 'fired',
    },
  },
  {
    id: 2,
    first_name: 'Peter',
    last_name: 'Parker',
    date_created: 1655914336000,
    date_birth: 1655908548000,
    status: {
      title: 'Не активный',
      code: 'not_active',
    },
  }],
  loading: false,
};

function driversReducer(state = initialState, action: TDriverAction): TDriversState {
  switch (action.type) {
    case DriverActionTypes.FETCH_DRIVERS:
      return {
        ...state,
        drivers: [...state.drivers, ...action.payload],
      };
    case DriverActionTypes.ADD_DRIVER:
      return {
        ...state,
        drivers: [...state.drivers, action.payload],
      };
    case DriverActionTypes.UPDATE_DRIVER:
      return {
        ...state,
        drivers: [...state.drivers,
          Object.assign(
            {},
            ...state.drivers.filter((driver) => driver.id === action.payload.id),
            action.payload,
          ),
        ],
      };
    case DriverActionTypes.REMOVE_DRIVER:
      return {
        ...state,
        drivers: state.drivers.filter((driver) => driver.id !== action.payload),
      };
    default:
      return state;
  }
}

export default driversReducer;
