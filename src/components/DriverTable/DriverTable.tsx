import React, { FC, useMemo } from 'react';
import TableHeader from '../TableHeader/TableHeader';
import DriverTableRow from '../DriverTableRow/DriverTableRow';
import { columnsDrivers } from '../../constants/columns';
import { TDriver } from '../../types/types';
import classes from './DriverTable.module.scss';

interface IDriverTable {
  drivers: TDriver[];
}

const DriverTable: FC<IDriverTable> = ({ drivers }) => {
  const driverData = useMemo(() => drivers.map((driver) => <DriverTableRow key={driver.id} driver={driver} />), [drivers]);

  return (
    <table className={classes.driverTable}>
      <col className={classes.col1} />
      <TableHeader columns={columnsDrivers} />
      <tbody>
        {driverData}
      </tbody>
    </table>
  );
};

export default DriverTable;
