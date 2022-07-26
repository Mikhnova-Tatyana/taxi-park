import React, {
  FC, useState, ChangeEvent, MouseEvent, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import classes from './CarForm.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { CarStatusCodes, CarStatus } from '../../constants/status';
import LabeledSelect from '../LabeledSelect/LabeledSelect';
import { TCarRequest, TCarStatus } from '../../types/types';
import { BtnTypes } from '../../constants/buttonTypes';
import { addCar } from '../../redux/reducers/carsReducer/actions';

interface ICarForm {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CarForm: FC<ICarForm> = ({ setIsOpen }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [mark, setMark] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [driverId, setDriverId] = useState<string>('');
  const [statusCode, setStatusCode] = useState<string>(CarStatusCodes.ECO);

  // const markInputHandler = useCallback( (event: ChangeEvent<HTMLInputElement>) => {
  //   setMark(event.target.value);
  // }, [])
  const markInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMark(e.target.value);
  };
  const modelInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setModel(e.target.value);
  };
  const numberInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };
  const yearInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };
  const idInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDriverId(e.target.value);
  };

  const setInitialState = () => {
    setMark('');
    setModel('');
    setNumber('');
    setYear('');
    setDriverId('');
    setStatusCode(CarStatusCodes.ECO);
  };
  const cancelHandler = () => {
    setIsOpen(false);
    setInitialState();
  };
  const addHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const status: TCarStatus | undefined = CarStatus.find((st) => st.code === statusCode);

    const carData: TCarRequest = {
      model: model.trim(),
      mark: mark.trim(),
      year: Number(year),
      number: number.trim(),
      driver_id: Number(driverId),
      status: status!,
    };
    // dispatch(addCar(carData));
    setIsOpen(false);
    setInitialState();
    console.log(carData);
  };

  return (
    <form className={classes.form}>
      <h2 className={classes.form__title}>{t('add_car')}</h2>
      <Input type="text" value={mark} text={t('mark')} onChange={markInputHandler} />
      <Input type="text" value={model} text={t('model')} onChange={modelInputHandler} />
      <Input type="text" value={number} text={t('number')} onChange={numberInputHandler} />
      <Input type="number" value={year} text={t('year')} onChange={yearInputHandler} />
      <Input
        type="number"
        value={driverId}
        text={t('driver_id')}
        onChange={idInputHandler}
      />
      <LabeledSelect
        initialValue={statusCode}
        options={CarStatus}
        onChange={setStatusCode}
      />
      <div className={classes.form__buttons}>
        <Button onClick={cancelHandler} type={BtnTypes.CANCEL}>{t('cancel')}</Button>
        <Button className="_icon-save" onClick={addHandler} type={BtnTypes.SAVE}>{t('save')}</Button>
      </div>
    </form>
  );
};

export default CarForm;
