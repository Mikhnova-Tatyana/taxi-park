import React, { FC, useMemo } from 'react';
import TableHeader from '../TableHeader/TableHeader';
import CarTableRow from '../CarTableRow/CarTableRow';
import { columnsCars } from '../../constants/columns';
import { TCar } from '../../types/types';
import classes from './CarTable.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface ICarTable {
  cars: TCar[];
}

const CarTable: FC<ICarTable> = ({ cars }) => {
  const { isActive } = useTypedSelector((state) => state.menu);
  const rootClasses: string[] = [classes.carTable];
  if (isActive) {
    rootClasses.push(classes.active);
  }

  const carData = useMemo(() => cars.map((car) => <CarTableRow key={car.id} car={car} />), [cars]);

  return (
    <table className={rootClasses.join(' ')}>
      <col className={classes.col1} />
      <col className={classes.col2} />
      <col className={classes.col3} />
      <col className={classes.col4} />
      <col className={classes.col5} />
      <col className={classes.col6} />
      <col className={classes.col7} />
      <col className={classes.col8} />
      <TableHeader columns={columnsCars} />
      <tbody>
        {carData}
      </tbody>
    </table>
  );
};

export default CarTable;
