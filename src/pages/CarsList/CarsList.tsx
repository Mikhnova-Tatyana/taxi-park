import React, { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CarForm from '../../components/CarForm/CarForm';
import Modal from '../../components/Modal/Modal';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TCar } from '../../types/types';
import CarTable from '../../components/CarTable/CarTable';
import classes from './CarsList.module.scss';
import TableCaption from '../../components/TableCaption/TableCaption';

const CarsList = () => {
  const { id } = useParams();
  // let [cars, setCars] = useState<TCar[] | []>([]);
  // const [cars, setCars] = useState<TCar[] | []>([
  //   {
  //     id: '1',
  //     model: 'TT',
  //     mark: 'audi',
  //     number: '12345678',
  //     year: 2015,
  //     driver_id: 1,
  //     status: {
  //       title: 'Стандарт',
  //       code: 'standart',
  //     },
  //   },
  //   {
  //     id: '2',
  //     model: 'duster',
  //     mark: 'renault',
  //     number: '12345678',
  //     year: 2018,
  //     driver_id: 2,
  //     status: {
  //       title: 'Стандарт',
  //       code: 'standart',
  //     },
  //   },
  //   {
  //     id: '4',
  //     model: 'duster',
  //     mark: 'renault',
  //     number: '12345678',
  //     year: 2018,
  //     driver_id: 2,
  //     status: {
  //       title: 'Стандарт',
  //       code: 'standart',
  //     },
  //   },
  // ]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // async function fetchData() {
  //   const request = await fetch('https://edu.evgeniychvertkov.com/v1/car', {
  //     method: 'GET',
  //     headers: {
  //       'X-Authorization': 'apib7291d02b2745c94724773d7ece5337187ccf8576914ce7b14583a2dcb6dd766',
  //     },
  //   });
  //   const response = await request.json();
  //   return response;
  // }

  // useEffect(() => {
  //   fetchData().then((response) => setCars(response));
  // }, []);
  let { cars } = useTypedSelector((state) => state.cars);
  // const removeCar = (car: TCar) => {
  //   setCars(cars?.filter((c) => c.id !== car.id));
  // };
  // let carsInfo: TCar[];
  if (Number(id)) {
    cars = cars.filter((car) => car.driver_id === Number(id));
  }
  const total = useMemo(() => cars.length, [cars]);
  const { isActive } = useTypedSelector((state) => state.menu);
  const rootClasses: string[] = [classes.container];
  if (isActive) {
    rootClasses.push(classes.active);
  }

  const modalHandler = () => setIsOpen(true);
  return (
    cars.length > 0
      ? (
        <div className={rootClasses.join(' ')}>
          <div className="table-wrapper">
            <TableCaption
              tableTitle="cars"
              buttonText="add_car"
              total={total}
              modalHandler={modalHandler}
            />
            <CarTable cars={cars} />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
              <CarForm setIsOpen={setIsOpen} />
            </Modal>
          </div>
        </div>
      )
      : <h2>There are no cars in Taxi Park</h2>
  );
};

export default CarsList;
