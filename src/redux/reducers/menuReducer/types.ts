export type TMenuState = {
  isActive: boolean;
};

export enum EMenuActionTypes {
  CHANGE_ACTIVE = 'CHANGE_ACTIVE',
}

export type TChangeActiveAction = {
  type: EMenuActionTypes.CHANGE_ACTIVE;
};

export type TMenuAction =
| TChangeActiveAction;
