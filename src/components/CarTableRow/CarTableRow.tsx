import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { TCar } from '../../types/types';
import Button from '../Button/Button';
import InputTableCell from '../InputTableCell/InputTableCell';
import { removeCar, updateCar } from '../../redux/reducers/carsReducer/actions';
import SelectTableCell from '../SelectTableCell/SelectTableCell';
import { CarStatus } from '../../constants/status';
import { BtnTypes } from '../../constants/buttonTypes';
import classes from './CarTableRow.module.scss';
import { EColumnsCars } from '../../constants/columns';

interface ICarTableRow {
  car: TCar;
}

const CarTableRow: FC<ICarTableRow> = ({ car }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const fields = useMemo(() => Object.keys(car), [car]);

  const remove = (id: number) => dispatch(removeCar(id));
  const removeHandler = () => remove(car.id);

  return (
    <tr className={classes.row}>
      <td data-label={t(EColumnsCars.ID)}>{car.id}</td>
      <td data-label={t(EColumnsCars.MARK)}>{car.mark}</td>
      <td data-label={t(EColumnsCars.MODEL)}>{car.model}</td>
      <InputTableCell
        data={car.number}
        field={fields[3]}
        id={car.id}
        dataLabel={t(EColumnsCars.NUMBER)}
      />
      <td data-label={t(EColumnsCars.YEAR)}>{car.year}</td>
      <td data-label={t(EColumnsCars.DRIVER_ID)}>{car.driver_id}</td>
      <SelectTableCell
        data={car.status.title}
        id={car.id}
        options={CarStatus}
        dataLabel={t(EColumnsCars.STATUS)}
      />
      <td data-label={t(EColumnsCars.ACTIONS)}>
        <Button onClick={removeHandler} type={BtnTypes.REMOVE}>{t('remove')}</Button>
      </td>
    </tr>
  );
};

export default CarTableRow;
