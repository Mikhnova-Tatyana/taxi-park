import React, { FC, ChangeEvent } from 'react';
import classes from './Input.module.scss';

interface IInput {
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  text: string;
}

const Input: FC<IInput> = ({
  type, value, onChange, text,
}) => (
  <label className={classes.wrapper}>
    <span>{text}</span>
    <input type={type} value={value} onChange={onChange} />
  </label>
);

export default Input;
