import React, { FC } from 'react';

interface IIcon {
  className: string;
  onClick?: () => void;
}

const Icon: FC<IIcon> = ({ className, onClick }) => (
  <i
    className={className}
    onClick={onClick}
  />
);

export default Icon;
