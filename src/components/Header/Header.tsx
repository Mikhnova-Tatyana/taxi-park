import { FC } from 'react';
import classes from './Header.module.scss';
import LanguageToggler from '../LanguageToggler/LanguageToggler';
import NavBlock from '../NavBlock/NavBlock';

const Header: FC = () => (
  <header>
    <div className={classes.wrapper}>
      <NavBlock />
      <LanguageToggler />
    </div>
  </header>
);

export default Header;
