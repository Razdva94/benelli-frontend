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
  

  postMotoPhotos(formData: any, motoName: string){
    return this._request(`${this._url}/photos?motoName=${motoName}`, {
      method: 'POST',
      body: formData, 
    });
  }


  changeMotoInfo(motoName: any, motoPrice: any, description: any, motoLinks?: any) {
    const requestBody: { motoName: any; motoPrice?: any; description?: any; motoLinks?: any } = { motoName };
    if (motoPrice) requestBody.motoPrice  = motoPrice ;
    if (description.length > 0) requestBody.description = description;
    if (motoLinks?.length > 0) requestBody.motoLinks = motoLinks;

    return this._request(`${this._url}/motorcycles`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(requestBody),
    });
  }
  deleteMotoPhotos(photoArr: any){
    const requestBody = {
     photoArr
    };
    return this._request(`${this._url}/photos`, {
      headers: this._headers,
      method:  'DELETE',
      body: JSON.stringify(requestBody), 
    });
  }

  postMotorcycles(
    motoName: string,
    motoPrice: string,
    description: Array<string>,
    motoPerformance: Object,
    motoLinks: any,
  ) {
    const requestBody = {
      motoName,
      motoPrice,
      description,
      motoPerformance,
      motoLinks
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
      cache: 'no-store',
    });
  }

  getMotorcycle(motoName:string){
    return this._request(`${this._url}/motorcycle`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(motoName),
      cache: 'no-store',
    });
  }


  _checkResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(url: RequestInfo | URL, options: RequestInit | undefined) {
    return fetch(url, options).then((res) => this._checkResponse(res));
  }
}

const api = new Api({
  baseUrl: process.env.NEXT_PUBLIC_URL_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// https://benellispb.ru/apiS
// http://localhost:3000/apiS
export default api;
