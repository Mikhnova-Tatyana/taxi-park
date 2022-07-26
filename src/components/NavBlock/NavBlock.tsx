import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as LogoAJ } from '../../assets/images/logo_AJ.svg';
import { ReactComponent as BurgerIcon } from '../../assets/images/burger.svg';
import { changeActive } from '../../redux/reducers/menuReducer/actions';
import Navigation from '../Navigation/Navigation';
import classes from './NavBlock.module.scss';

const NavBlock: FC = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => dispatch(changeActive());

  return (
    <>
      <div className={classes.navBlock__icons}>
        <BurgerIcon onClick={toggleHandler} className={classes.navBlock__button} />
        <LogoAJ />
      </div>
      <Navigation />
    </>
  );
};

export default NavBlock;
