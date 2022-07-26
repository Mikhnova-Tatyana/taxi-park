import React, { useState, useEffect, useRef } from 'react';
import Select from '../Select/Select';
import classes from './SelectTableCell.module.scss';

interface Option<T> {
  code: T;
  title: string;
}

interface ISelectTableCell<T> {
  data: string;
  id: number;
  options: Option<T>[];
  dataLabel: string;
}

const SelectTableCell = <T extends string> ({
  data, id, options, dataLabel,
}: ISelectTableCell<T>) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>(data);
  // console.log(value)
  const selectEl = useRef<HTMLSelectElement>(null);

  const clickHandler = () => {
    setIsEditing(true);
  };
  // const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => setValue(e.target.value);
  const blurHandler = () => {
    setIsEditing(false);
    const status: Option<T> | undefined = options.find((st) => st.code === value);
    console.log(status);
  };
  // console.log(selectEl.current)

  useEffect(() => {
    selectEl.current?.focus();
  }, [isEditing]);

  return (
    <td data-label={dataLabel} className={classes.cell__wrapper}>
      {isEditing
        ? (
          <Select
            ref={selectEl}
            initialValue={value}
            options={options}
            onChange={setValue}
            onBlur={blurHandler}
            className={classes.cell__select}
          />
        )
        : <span onClick={clickHandler} className={classes.cell__span}>{data}</span>}
    </td>
  );
};

export default SelectTableCell;
