export enum EColumnsDrivers {
  ID = 'id',
  NAME = 'name',
  SURNAME = 'surname',
  REGISTRITION_DATE = 'registration_date',
  BIRTH_DATE = 'birth_date',
  STATUS = 'status',
  ACTIONS = 'actions',
}

export enum EColumnsCars {
  ID = 'id',
  MARK = 'mark',
  MODEL = 'model',
  NUMBER = 'number',
  YEAR = 'year',
  DRIVER_ID = 'driver_id',
  STATUS = 'status',
  ACTIONS = 'actions',
}

export type TColumns = {
  field: EColumnsDrivers | EColumnsCars;
};

export const columnsDrivers: TColumns[] = [
  { field: EColumnsDrivers.ID },
  { field: EColumnsDrivers.NAME },
  { field: EColumnsDrivers.SURNAME },
  { field: EColumnsDrivers.BIRTH_DATE },
  { field: EColumnsDrivers.REGISTRITION_DATE },
  { field: EColumnsDrivers.STATUS },
  { field: EColumnsDrivers.ACTIONS },
];

export const columnsCars: TColumns[] = [
  { field: EColumnsCars.ID },
  { field: EColumnsCars.MARK },
  { field: EColumnsCars.MODEL },
  { field: EColumnsCars.NUMBER },
  { field: EColumnsCars.YEAR },
  { field: EColumnsCars.DRIVER_ID },
  { field: EColumnsCars.STATUS },
  { field: EColumnsCars.ACTIONS },
];
