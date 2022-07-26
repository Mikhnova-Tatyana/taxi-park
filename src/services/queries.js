// apib7291d02b2745c94724773d7ece5337187ccf8576914ce7b14583a2dcb6dd766

// // GET DRIVER
// let response = await fetch('https://edu.evgeniychvertkov.com/v1/driver', {
//   method: 'GET',
//   headers: {
//     'X-Authorization': 'apib7291d02b2745c94724773d7ece5337187ccf8576914ce7b14583a2dcb6dd766'
//   }
// });
// let parsed = await response.json();

// let response = await fetch('https://edu.evgeniychvertkov.com/v1/driver/1', {
//   method: 'GET',
//   headers: {
//     'X-Authorization': 'apib7291d02b2745c94724773d7ece5337187ccf8576914ce7b14583a2dcb6dd766'
//   }
// });
// let parsed = await response.json();

// let response = await fetch('https://edu.evgeniychvertkov.com/v1/driver-status', {
//   method: 'GET',
//   headers: {
//     'X-Authorization': 'apib7291d02b2745c94724773d7ece5337187ccf8576914ce7b14583a2dcb6dd766'
//   }
// });
// let parsed = await response.json();

// // POST DRIVER

// const driver = {
//   first_name: 'John',
//   last_name: 'Smith',
//   date_birth: 1655908548752,
//   status: {
//     title: 'Уволенный',
//     code: 'fired'
//   },
// };

// let response = await fetch('https://edu.evgeniychvertkov.com/v1/driver/', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Authorization': 'apib7291d02b2745c94724773d7ece5337187ccf8576914ce7b14583a2dcb6dd766',
//   },
//   body: JSON.stringify(driver),
//   });
// let result = await response.json();

// // PUT DRIVER

// let response = await fetch('https://edu.evgeniychvertkov.com/v1/driver/2', {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Authorization': 'apib7291d02b2745c94724773d7ece5337187ccf8576914ce7b14583a2dcb6dd766',
//   },
//   body: JSON.stringify({
//     first_name: 'Peter',
//     last_name: 'Parker',
//     date_birth: 1655908548899,
//     status: {
//       title: 'Не активный',
//       code: 'not_active'
//     },
//   }),
//   });
// let result = await response.json();

// // PATCH DRIVER

// let response = await fetch('https://edu.evgeniychvertkov.com/v1/driver/3', {
//   method: 'PATCH',
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Authorization': 'apib7291d02b2745c94724773d7ece5337187ccf8576914ce7b14583a2dcb6dd766',
//   },
//   body: JSON.stringify({
//     first_name: 'Ilon',
//     last_name: 'Mask',
//     date_birth: 165590456734,
//     status: {
//       title: 'Активный',
//       code: 'active'
//     },
//   }),
//   });
// let result = await response.json();

// // DELETE DRIVER

// let response = await fetch('https://edu.evgeniychvertkov.com/v1/driver/3', {
//   method: 'DELETE',
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Authorization': 'apib7291d02b2745c94724773d7ece5337187ccf8576914ce7b14583a2dcb6dd766',
//   },
//   });
// let result = await response.json();

// // GET CAR

// let response = await fetch('https://edu.evgeniychvertkov.com/v1/car', {
//   method: 'GET',
//   headers: {
//     'X-Authorization': 'apib7291d02b2745c94724773d7ece5337187ccf8576914ce7b14583a2dcb6dd766'
//   }
// });
// let parsed = await response.json();

// let response = await fetch('https://edu.evgeniychvertkov.com/v1/car/1', {
//   method: 'GET',
//   headers: {
//     'X-Authorization': 'apib7291d02b2745c94724773d7ece5337187ccf8576914ce7b14583a2dcb6dd766'
//   }
// });
// let parsed = await response.json();

// let response = await fetch('https://edu.evgeniychvertkov.com/v1/car/', {
//   method: 'GET',
//   headers: {
//     'X-Authorization': 'apib7291d02b2745c94724773d7ece5337187ccf8576914ce7b14583a2dcb6dd766',
//     'E-Driver-Id': '1',
//   }
// });
// let parsed = await response.json();

// let response = await fetch('https://edu.evgeniychvertkov.com/v1/car-status', {
//   method: 'GET',
//   headers: {
//     'X-Authorization': 'apib7291d02b2745c94724773d7ece5337187ccf8576914ce7b14583a2dcb6dd766'
//   }
// });
// let parsed = await response.json();

// // POST CAR

// let car = {
//   model: 'duster',
//   mark: 'renault',
//   year: 2018,
//   number: '12345678',
//   driver_id: 2,
//   status: {
//     title: 'Стандарт',
//     code: 'standart'
//   },
// };

// let response = await fetch('https://edu.evgeniychvertkov.com/v1/car/', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8',
//     'X-Authorization': 'apib7291d02b2745c94724773d7ece5337187ccf8576914ce7b14583a2dcb6dd766',
//   },
//   body: JSON.stringify(car)
// });
// let result = await response.json();
// console.log(result)

// // PATCH CAR

// let car = {
//   year: 2003,
//   driver_id: 3,
//   status: {
//     title: 'Стандарт',
//     code: 'standart',
//   },
// }

// let response = await fetch('https://edu.evgeniychvertkov.com/v1/car/3', {
//   method: 'PATCH',
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Authorization': 'apib7291d02b2745c94724773d7ece5337187ccf8576914ce7b14583a2dcb6dd766',
//   },
//   body: JSON.stringify(car),
// });
// let result = await response.json();

// // DELETE CAR

// let response = await fetch('https://edu.evgeniychvertkov.com/v1/car/3', {
//   method: 'DELETE',
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Authorization': 'apib7291d02b2745c94724773d7ece5337187ccf8576914ce7b14583a2dcb6dd766',
//   },
//   });
// let result = await response.json();

// new Date(parsed.data[1].date_birth).toLocaleDateString().replace(/\//g, '.')
// Date.parse(new Date("2017-01-26"));