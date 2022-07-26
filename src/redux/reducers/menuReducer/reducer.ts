import { TMenuState, EMenuActionTypes, TMenuAction } from './types';

const initialState: TMenuState = {
  isActive: false,
};

function menuReducer(state = initialState, action: TMenuAction): TMenuState {
  switch (action.type) {
    case EMenuActionTypes.CHANGE_ACTIVE:
      return {
        isActive: !state.isActive,
      };
    default:
      return state;
  }
}

export default menuReducer;
