import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './TableCaption.module.scss';
import Button from '../Button/Button';
import { BtnTypes } from '../../constants/buttonTypes';

interface ITableCaption {
  tableTitle: string;
  buttonText: string;
  total: number;
  modalHandler: () => void;
}

const TableCaption: FC<ITableCaption> = ({
  tableTitle, buttonText, total, modalHandler,
}) => {
  const { t } = useTranslation();

  return (
    <div className={classes.caption}>
      <h3>
        <span className={classes.caption__title}>
          {t(tableTitle)}
        </span>
        <span className={classes.caption__total}>
          {`(${total})`}
        </span>
      </h3>
      <Button onClick={modalHandler} className="_icon-plus" type={BtnTypes.ADD}>
        <span className={classes.addButton}>{t(buttonText)}</span>
      </Button>
    </div>
  );
};

export default TableCaption;
