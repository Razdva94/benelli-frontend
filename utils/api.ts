class Api {
  _headers: any;
  _url: any;
  constructor(options: { baseUrl: any; headers: any }) {
    this._headers = options.headers;
    this._url = options.baseUrl;
  }

  postMessage(motoName: string, name: any, mobileNumber: any, message: string) {
    const requestBody = {
      motoName,
      name,
      mobileNumber,
      ...(message !== '' && { message }),
    };

    return this._request(`${this._url}/send-info`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(requestBody),
    });
  }

  postMotorcycles(
    motoName: string,
    motoPrice: string,
    mainImage: string,
    catalog: Array<string>,
    description: Array<string>,
    motoPerformance: Object,
  ) {
    const requestBody = {
      motoName,
      motoPrice,
      mainImage,
      catalog,
      description,
      motoPerformance,
    };

    return this._request(`${this._url}/motorcycles`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(requestBody),
    });
  }

  deleteMotorcycle( motoName: string,){
    const requestBody = {
      motoName
    };
    return this._request(`${this._url}/motorcycles`, {
      method: 'DELETE',
      headers: this._headers,
      body: JSON.stringify(requestBody),
    });
  }

  getMotorcycles(){
    return this._request(`${this._url}/motorcycles`, {
      method: 'GET',
      headers: this._headers,
    });
  }


  _checkResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }
    console.log(res);
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(url: RequestInfo | URL, options: RequestInit | undefined) {
    return fetch(url, options).then((res) => this._checkResponse(res));
  }
}

const api = new Api({
  baseUrl: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// https://benellispb.ru/api

export default api;
