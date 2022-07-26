import React, { useState, useMemo, useEffect } from 'react';
import DriverForm from '../../components/DriverForm/DriverForm';
import Modal from '../../components/Modal/Modal';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import DriverTable from '../../components/DriverTable/DriverTable';
import { TDriver } from '../../types/types';
import classes from './DriverList.module.scss';
import TableCaption from '../../components/TableCaption/TableCaption';

const DriversList = () => {
  // const [drivers, setDrivers] = useState<TDriver[] | []>([]);

  // async function fetchData() {
  //   const request = await fetch('https://edu.evgeniychvertkov.com/v1/driver', {
  //     method: 'GET',
  //     // mode: 'cors',
  //     headers: {
  //       'X-Authorization': 'apib7291d02b2745c94724773d7ece5337187ccf8576914ce7b14583a2dcb6dd766',
  //     },
  //   });
  //   const response = await request.json();
  //   return response;
  // }

  // useEffect(() => {
  //   fetchData().then((response) => setDrivers(response));
  // }, []);

  // const [drivers, setDrivers] = useState<TDriver[] | []>([
  //   {
  //     id: 1,
  //     first_name: 'John',
  //     last_name: 'Smith',
  //     date_created: 1655913802000,
  //     date_birth: 1655908548000,
  //     status: {
  //       title: 'Уволенный',
  //       code: 'fired',
  //     },
  //   },
  //   {
  //     id: 2,
  //     first_name: 'Peter',
  //     last_name: 'Parker',
  //     date_created: 1655914336000,
  //     date_birth: 1655908548000,
  //     status: {
  //       title: 'Не активный',
  //       code: 'not_active',
  //     },
  //   },
  // ]);
  const { drivers } = useTypedSelector((state) => state.drivers);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalHandler = () => setIsOpen(true);

  const total = useMemo(() => drivers.length, [drivers]);

  const { isActive } = useTypedSelector((state) => state.menu);
  const rootClasses: string[] = [classes.container];
  if (isActive) {
    rootClasses.push(classes.active);
  }

  // const removeDriver = (driver: TDriver) => setDrivers(drivers.filter((d) => d.id !== driver.id));

  return (
    drivers.length > 0
      ? (
        <div className={rootClasses.join(' ')}>
          <div className="table-wrapper">
            <TableCaption
              tableTitle="drivers"
              buttonText="add_driver"
              total={total}
              modalHandler={modalHandler}
            />
            <DriverTable drivers={drivers} />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
              <DriverForm setIsOpen={setIsOpen} />
            </Modal>
          </div>
        </div>
      )
      : <h2>There are no drivers in Taxi Park</h2>
  );
};

export default DriversList;
