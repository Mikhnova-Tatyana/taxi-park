import React from 'react';
import taxiImg from '../../assets/images/vector-taxi-vector-set-svg-eps.jpg';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import classes from './Main.module.scss';

const Main = () => {
  const { isActive } = useTypedSelector((state) => state.menu);
  const rootClasses: string[] = [classes.main];
  if (isActive) {
    rootClasses.push(classes.active);
  }
  return (
    <div className={rootClasses.join(' ')}>
      <img
        src={taxiImg}
        alt="taxi"
        width="800"
        height="700"
      />
    </div>
  );
};

export default Main;

// return (
//   <div className="_container main-page">
//     <img
//       src={taxiImg}
//       alt="taxi"
//       width="800"
//       height="700"
//     />
// </div>
// );
