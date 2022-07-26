import { useTranslation } from 'react-i18next';
import classes from './LabeledSelect.module.scss';
import Select from '../Select/Select';

interface Option<T> {
  code: T;
  title: string;
}

interface ILabledSelect<T extends string> {
  initialValue: T;
  options: Option<T>[];
  onChange: (value: string) => void;
}

const LabledSelect = <T extends string> ({ initialValue, options, onChange }: ILabledSelect<T>) => {
  const { t } = useTranslation();

  return (
    <label className={classes.wrapper}>
      <span>{t('status')}</span>
      <Select
        initialValue={initialValue}
        onChange={onChange}
        options={options}
        className={classes.select}
      />
    </label>
  );
};

export default LabledSelect;
