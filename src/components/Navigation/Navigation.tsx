import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { navigationConfig } from '../../constants/navigationConfig';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import classes from './Navigation.module.scss';

const Navigation = () => {
  const { t } = useTranslation();
  const { isActive } = useTypedSelector((state) => state.menu);
  const rootClasses: string[] = [classes.navigation];
  if (isActive) {
    rootClasses.push(classes.active);
  }

  return (
    <nav className={rootClasses.join(' ')}>
      <ul className={classes.navigation__list}>
        <li className={classes.navigation__item}>
          <NavLink to={navigationConfig.drivers.path}>
            <span className="_icon-drivers">{t('drivers')}</span>
          </NavLink>
        </li>
        <li className={classes.navigation__item}>
          <NavLink to={navigationConfig.cars.path}>
            <span className="_icon-cars">{t('cars')}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
