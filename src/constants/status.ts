import { TDriverStatus, TCarStatus } from '../types/types';

export enum DriverStatusCodes {
  ACTIVE = 'active',
  BLOCKED = 'blocked',
  FIRED = 'fired',
  NOT_ACTIVE = 'not_active',
}

export enum CarStatusCodes {
  ECONOM = 'econom',
  STANDART = 'standart',
  BUSSINESS = 'bussiness',
  ECO = 'eco',
}

export const DriverStatus: TDriverStatus[] = [
  {
    title: 'Активный',
    code: DriverStatusCodes.ACTIVE,
  }, {
    title: 'Заблокирован',
    code: DriverStatusCodes.BLOCKED,
  }, {
    title: 'Уволенный',
    code: DriverStatusCodes.FIRED,
  }, {
    title: 'Не активный',
    code: DriverStatusCodes.NOT_ACTIVE,
  },
];

export const CarStatus: TCarStatus[] = [
  {
    title: 'Эконом',
    code: CarStatusCodes.ECONOM,
  }, {
    title: 'Стандарт',
    code: CarStatusCodes.STANDART,
  }, {
    title: 'Бизнесс',
    code: CarStatusCodes.BUSSINESS,
  }, {
    title: 'Эко',
    code: CarStatusCodes.ECO,
  },
];
