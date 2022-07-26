import React, {
  ChangeEvent, forwardRef, ForwardedRef, useMemo,
} from 'react';
import classes from './Select.module.scss';

export interface Option<T> {
  code: T;
  title: string;
}

interface ISelectProps<T extends string> {
  initialValue: T;
  options: Option<T>[];
  onChange: (value: T) => void;
  onBlur?: () => void;
  className?: string;
}

const Select = <T extends string>({
  initialValue, options, onChange, onBlur, className,
}: ISelectProps<T>,
  ref?: ForwardedRef<HTMLSelectElement>) => {
  const styles = useMemo(() => [classes.select, className].join(' '), [className]);

  function handleOnChange(e: ChangeEvent<HTMLSelectElement>) {
    const { selectedIndex } = e.currentTarget;
    const selectedOption = options[selectedIndex];
    onChange(selectedOption.code);
  }

  const selectBody = options.map((status) => (
    <option key={status.code} value={status.code}>
      {status.title}
    </option>
  ));

  return (
    <select
      value={initialValue}
      onChange={handleOnChange}
      onBlur={onBlur}
      ref={ref}
      className={styles}
    >
      {selectBody}
    </select>
  );
};

export default forwardRef(Select);
