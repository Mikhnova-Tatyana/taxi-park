import i18next from 'i18next';
import { FC, ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from '../../constants/i18n';
import classes from './LanguageToggler.module.scss';

const LanguageToggler : FC = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState<string>(localStorage.getItem('i18nextLng') || Languages.EN);
  const languageHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    i18next.changeLanguage(event.target.value);
    setLanguage(event.target.value);
  };
  return (
    <label className={classes.wrapper}>
      <span>{t('select_language')}</span>
      <select value={language} onChange={languageHandler}>
        <option value={Languages.DE}>{Languages.DE}</option>
        <option value={Languages.EN}>{Languages.EN}</option>
        <option value={Languages.RU}>{Languages.RU}</option>
        <option value={Languages.UK}>{Languages.UK}</option>
      </select>
    </label>
  );
};

export default LanguageToggler;
