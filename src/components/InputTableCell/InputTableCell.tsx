import React, {
  ChangeEvent, FC, useState, useEffect, useCallback, useRef,
} from 'react';
import classes from './InputTableCell.module.scss';

interface IInputTableCell {
  data: string;
  field: string;
  id: number;
  dataLabel: string;
}

const InputCell: FC<IInputTableCell> = ({
  data, field, id, dataLabel,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>(data);
  const inputEl = useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    setIsEditing(true);
  };
  const changeHangler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const blurHandler = () => {
    setIsEditing(false);
    console.log(`${field}: ${value.trim()}`);
  };

  const enterKeyDownHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setIsEditing(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', (e) => enterKeyDownHandler(e));
    return document.removeEventListener('keydown', enterKeyDownHandler);
  }, [enterKeyDownHandler]);

  useEffect(() => {
    inputEl.current?.focus();
  }, [isEditing]);

  return (
    <td data-label={dataLabel} className={classes.cell__wrapper}>
      {isEditing
        ? <input ref={inputEl} value={value} onChange={changeHangler} onBlur={blurHandler} />
        : <span onClick={clickHandler}>{data}</span>}
    </td>
  );
};

export default InputCell;
