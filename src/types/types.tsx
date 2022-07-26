import { DriverStatusCodes, CarStatusCodes } from '../constants/status';

type TActive = {
  title: 'Активный';
  code: 'active';
};

type TBlocked = {
  title: 'Заблокирован';
  code: 'blocked';
};

type TFired = {
  title: 'Уволенный';
  code: 'fired';
};

type TNotActive = {
  title: 'Не активный';
  code: 'not_active';
};

type TEconom = {
  title: 'Эконом';
  code: 'econom';
};

type TStandard = {
  title: 'Стандарт';
  code: 'standart';
};

type TBusiness = {
  title: 'Бизнесс';
  code: 'bussiness';
};

type TEco = {
  title: 'Эко';
  code: 'eco';
};

export type DriverStatus = TActive | TBlocked | TFired | TNotActive;
export type CarStatus = TEconom | TStandard | TBusiness | TEco;

export type TDriverStatus = {
  title: string;
  code: DriverStatusCodes;
};

export type TCarStatus = {
  title: string;
  code: CarStatusCodes;
};

export type TDriver = {
  id: number;
  first_name: string;
  last_name: string;
  date_birth: number;
  date_created: number;
  status: DriverStatus;
};

export type TDriverRequest = {
  first_name: string;
  last_name: string;
  date_birth: number;
  date_created: number;
  status: TDriverStatus;
};

export type TCar = {
  id: number;
  model: string;
  mark: string;
  year: number;
  number: string;
  driver_id: number;
  status: CarStatus;
};

export type TCarRequest = {
  model: string;
  mark: string;
  year: number;
  number: string;
  driver_id: number;
  status: TCarStatus;
};
