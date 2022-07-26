import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TDriver } from '../../types/types';
import Button from '../Button/Button';
import InputTableCell from '../InputTableCell/InputTableCell';
import { removeDriver } from '../../redux/reducers/driversReducer/actions';
import { removeDriverCars } from '../../redux/reducers/carsReducer/actions';
import { navigationConfig } from '../../constants/navigationConfig';
import SelectTableCell from '../SelectTableCell/SelectTableCell';
import { DriverStatus } from '../../constants/status';
import { BtnTypes } from '../../constants/buttonTypes';
import { dateСonverter } from '../../helpers/dateConverter';
import classes from './DriverTableRow.module.scss';
import { EColumnsDrivers } from '../../constants/columns';

interface IDriverTableRow {
  driver: TDriver;
}

const DriverTableRow: FC<IDriverTableRow> = ({ driver }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fields = useMemo(() => Object.keys(driver), [driver]);
  const birthDay = useMemo(() => dateСonverter(driver.date_birth), [driver.date_birth]);
  const createdDate = useMemo(() => dateСonverter(driver.date_created), [driver.date_created]);

  const remove = (id: number) => {
    dispatch(removeDriver(id));
    dispatch(removeDriverCars(id!));
  };
  const removeHandler = () => remove(driver.id);
  const watchHandler = () => navigate(`${navigationConfig.driverProperty.path}${driver.id}`);

  return (
    <tr className={classes.row}>
      <td data-label={t(EColumnsDrivers.ID)}>{driver.id}</td>
      <InputTableCell
        dataLabel={t(EColumnsDrivers.NAME)}
        data={driver.first_name}
        field={fields[1]}
        id={driver.id}
      />
      <InputTableCell
        dataLabel={t(EColumnsDrivers.SURNAME)}
        data={driver.last_name}
        field={fields[2]}
        id={driver.id}
      />
      <td data-label={t(EColumnsDrivers.BIRTH_DATE)}>
        {birthDay}
      </td>
      <td data-label={t(EColumnsDrivers.REGISTRITION_DATE)}>
        {createdDate}
      </td>
      <SelectTableCell
        dataLabel={t(EColumnsDrivers.STATUS)}
        data={driver.status.title}
        id={driver.id}
        options={DriverStatus}
      />
      <td
        className={classes.row__buttons}
        data-label={t(EColumnsDrivers.ACTIONS)}
      >
        <Button onClick={removeHandler} type={BtnTypes.REMOVE}>
          {t('remove')}
        </Button>
        <Button onClick={watchHandler} type={BtnTypes.CARS}>
          {t('cars')}
        </Button>
      </td>
    </tr>
  );
};

export default DriverTableRow;
