import React, { FC } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import classes from './BreadCrumbs.module.scss';

export interface ILocationState {
  from: {
    id: string,
    path: string,
    title: string,
    url: string,
  }
}

export interface IBreadcrumbsLocationState {
  id: string;
  path: string;
  title: string;
  url: string;
}

const BreadCrumbs: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathnames = pathname.split('/').filter(Boolean);
  // const { from } = location.state as ILocationState;

  console.log(pathnames);

  // const pathnames = pathname.split("/").filter(Boolean);
  // console.log(from);
  // const { state } = location.state as IBreadcrumbsLocationState;

  // if (state) {
  //   return (
  //     <nav className="Breadcrumbs">
  //       {state.map(crumb => (
  //         <Crumb {...crumb} key={crumb.url} />
  //       ))}
  //     </nav>
  //   );
  // }
  // return null;
  return (
    <div className={classes.breadCrumbs}>
      BreadCrumbs
    </div>
  );

  // return (
  //   <nav>
  //     {pathnames.length ? (
  //       <Link onClick={() => navigate("/")}>Home</Link>
  //     ) : (
  //       <Typography> Home </Typography>
  //     )}
  //     {pathnames.map((name, index) => {
  //       const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
  //       const isLast = index === pathnames.length - 1;
  //       return isLast ? (
  //         <Typography key={name}>{name}</Typography>
  //       ) : (
  //         <Link key={name} onClick={() => navigate(routeTo)}>
  //           {name}
  //         </Link>
  //       );
  //     })}
  //   </nav>
  // );
};

export default BreadCrumbs;
