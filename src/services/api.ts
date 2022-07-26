import { API_URL, API_KEY, ERROR_MESSAGE } from '../constants/api';
import {
  TCar, TDriver, TDriverStatus, TCarStatus,
} from '../types/types';

// interface HttpResponse<T> extends Response {
//   parsedBody?: T;
// }

// export async function http<T>(path: string): Promise<HttpResponse<T>> {
//     const response: HttpResponse<T> = await fetch(`${API_URL}${path}`, {
//       headers: {
//         'X-Authorization': API_KEY,
//         'Content-Type': 'application/json;charset=utf-8',
//       }
//     });
//   try {
//     response.parsedBody = await response.json();
//   } catch (ex) {}
//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }
//   return response;
// }

// export const getDrivers = http<TDriver[]>('driver');
// export const getCars = http<TCar[]>('car');

// (): Promise<TDriver[]> => getData(`${API_URL}/driver/`);

// async function changeData(url: string, body: Record<string, unknown>) {
//   try {
//     const response = await fetch(url, {
//       method: 'PUT',
//       headers: {
//         'X-Authorization': API_KEY,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     });

//     const { data } = await response.json();
//     return data;
//   } catch (error) {
//     return error;
//   }
// }

// async function deleteData(url: string) {
//   try {
//     const response = await fetch(url, {
//       method: 'DELETE',
//       headers: {
//         'X-Authorization': API_KEY,
//         'Content-Type': 'application/json',
//       }
//     })
//     const { data } = await response.json();
//     return data;
//   } catch (error) {
//     return error;
//   }
// }

// export async function postData<T>(path: string, body: any): Promise<HttpResponse<T>> {
//   try {
//     const request = await fetch(`${API_URL}${path}/`, {
//       method: 'POST',
//       headers: {
//         'X-Authorization': 'apib7291d02b2745c94724773d7ece5337187ccf8576914ce7b14583a2dcb6dd766'
//       },
//       body: JSON.stringify(body);
//     });
//     const data = await request.json();
//     return data;
//   } catch (error) {
//     throw new Error(ERROR_MESSAGE);
//   }
// }

// const response = await http<{
//   id: number;
// }>(
//   new Request(
//     "https://jsonplaceholder.typicode.com/posts",
//     {
//       method: "post",
//       body: JSON.stringify({
//         title: "my post",
//         body: "some content"
//       })
//     }
//   )
// );

// export async function postData<T>(
//   path: string,
//   body: any,
//   args: RequestInit = { method: "post", body: JSON.stringify(body) }
// ): Promise<HttpResponse<T>>  {
//   return await http<T>(new Request(path, args));
// };

// export async function put<T>(
//   path: string,
//   body: any,
//   args: RequestInit = { method: "put", body: JSON.stringify(body) }
// ): Promise<HttpResponse<T>> {
//   return await http<T>(new Request(path, args));
// };

// export const postData = async () => {
//   return fetch("http://localhost:4000/notes", {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//     },
//     body: JSON.stringify(notes)
//   }).then(res => res.json())
// }

async function getData(url: string) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Authorization': API_KEY,
        'Content-Type': 'application/json',
      },
    });

    const { data } = await response.json();
    return data;
  } catch (error) {
    if (error) {
      return ERROR_MESSAGE;
    }
  }
}

async function postData(url: string, body: Record<string, unknown>) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'X-Authorization': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    if (error) {
      return ERROR_MESSAGE;
    }
  }
}

async function removeData(url: string) {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'X-Authorization': API_KEY,
        'Content-Type': 'application/json',
      },
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    if (error) {
      return ERROR_MESSAGE;
    }
  }
}

async function changeData(url: string, body: Record<string, unknown>) {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'X-Authorization': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const { data } = await response.json();
    return data;
  } catch (error) {
    if (error) {
      return ERROR_MESSAGE;
    }
  }
}

export const getCars = (): Promise<TCar[]> => getData(`${API_URL}/car/`);
export const getDrivers = (): Promise<TDriver[]> => getData(`${API_URL}/driver/`);

export const getStatusDrivers = (): Promise<TDriverStatus[]> => getData(`${API_URL}/driver-status/`);
export const getStatusCars = (): Promise<TCarStatus[]> => getData(`${API_URL}/car-status/`);

export const removeDriver = (id: number): Promise<void> => removeData(`${API_URL}/driver/${id}/`);
export const removeCar = (id: number): Promise<void> => removeData(`${API_URL}/car/${id}/`);

export const putCar = (id: number, body: Omit<TCar, 'id'>): Promise<TCar> => changeData(`${API_URL}/car/${id}/`, body);
export const putDriver = (id: number, body: Omit<TDriver, 'id'>): Promise<TDriver> => changeData(`${API_URL}/driver/${id}/`, body);

export const addDriver = (body: Omit<TDriver, 'id'>): Promise<TDriver> => postData(`${API_URL}/driver/`, body);
export const addCar = (body: Omit<TCar, 'id'>): Promise<TCar> => postData(`${API_URL}/car/`, body);

// interface HttpResponse<T> extends Response {
//   parsedBody?: T;
// }

// export async function http<T>(
//   request: RequestInfo
// ): Promise<HttpResponse<T>> {
//   const response: HttpResponse<T> = await fetch(
//     request
//   );

//   try {
//     // may error if there is no body
//     response.parsedBody = await response.json();
//   } catch (ex) {}

//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }
//   return response;
// }
