import React, {
  FC, useState, ChangeEvent, MouseEvent,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import classes from './DriverForm.module.scss';
import { DriverStatus, DriverStatusCodes } from '../../constants/status';
import { TDriverStatus, TDriverRequest } from '../../types/types';
import Button from '../Button/Button';
import Input from '../Input/Input';
import LabeledSelect from '../LabeledSelect/LabeledSelect';
import { BtnTypes } from '../../constants/buttonTypes';
import { addDriver } from '../../redux/reducers/driversReducer/actions';

interface IDriverForm {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DriverForm: FC<IDriverForm> = ({ setIsOpen }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [statusCode, setStatusCode] = useState<string>(DriverStatusCodes.ACTIVE);

  const nameInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const surnameInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
  };
  const birthInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setBirthDate(event.target.value);
  };

  const setInitialState = () => {
    setName('');
    setSurname('');
    setBirthDate('');
    setStatusCode(DriverStatusCodes.ACTIVE);
  };

  const cancelHandler = () => {
    setIsOpen(false);
    setInitialState();
  };

  const submitHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const status: TDriverStatus | undefined = DriverStatus.find((st) => st.code === statusCode);

    const driverData: TDriverRequest = {
      first_name: name.trim(),
      last_name: surname.trim(),
      date_birth: new Date(birthDate).getTime(),
      date_created: Date.now(),
      status: status!,
    };
    console.log(driverData);
    setIsOpen(false);
    setInitialState();
  };

  return (
    <form className={classes.form}>
      <h2 className={classes.form__title}>{t('add_driver')}</h2>
      <Input type="text" value={name} text={t('name')} onChange={nameInputHandler} />
      <Input type="text" value={surname} text={t('surname')} onChange={surnameInputHandler} />
      <Input type="date" value={birthDate} text={t('birth_date')} onChange={birthInputHandler} />
      {/* <Select initialValue={statusCode} options={DriverStatus} onChange={setStatusCode} /> */}
      <LabeledSelect initialValue={statusCode} options={DriverStatus} onChange={setStatusCode} />
      <div className={classes.form__buttons}>
        <Button onClick={cancelHandler} type={BtnTypes.CANCEL}>
          {t('cancel')}
        </Button>
        <Button className="_icon-save" onClick={submitHandler} type={BtnTypes.SAVE}>
          {t('save')}
        </Button>
      </div>
    </form>
  );
};

export default DriverForm;
