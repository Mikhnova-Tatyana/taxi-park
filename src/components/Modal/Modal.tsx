import React, { FC, MouseEvent } from 'react';
import classes from './Modal.module.scss';

interface IModal {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<IModal> = ({ children, isOpen, setIsOpen }) => {
  const rootClasses: string[] = [classes.modal];
  if (isOpen) {
    rootClasses.push(classes.active);
  }
  const isOpenHandler = () => setIsOpen(false);
  const clickHandler = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  return (
    <div className={rootClasses.join(' ')} onClick={isOpenHandler}>
      <div className={classes.modal__content} onClick={clickHandler}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
