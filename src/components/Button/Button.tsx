import { FC, MouseEvent, useMemo } from 'react';
import classes from './Button.module.scss';

interface IButton {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  type: string;
  children: React.ReactNode;
  className?: string;
}

const Button: FC<IButton> = ({
  onClick, type, className, children,
}) => {
  const styles = useMemo(() => [classes.button, classes[type], className].join(' '), [type, className]);

  return (
    <button
      type="button"
      onClick={onClick}
      className={styles}
    >
      {children}
    </button>
  );
};

export default Button;
