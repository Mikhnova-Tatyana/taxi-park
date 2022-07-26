import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TColumns } from '../../constants/columns';
import classes from './TableHeader.module.scss';

interface ITableHeader {
  columns: TColumns[];
}

const TableHeader: FC<ITableHeader> = ({ columns }) => {
  const { t } = useTranslation();

  const headers = useMemo(() => columns.map((column) => (
    <th key={column.field} className={classes.header}>
      {t(column.field)}
    </th>
  )), [columns, t]);

  return (
    <thead>
      <tr>
        {headers}
      </tr>
    </thead>
  );
};

export default TableHeader;
