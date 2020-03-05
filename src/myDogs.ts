const axios = require('axios');

interface KeyValue<T, U> {
  T: string;
  U: string;
}

type ApiMethod = 'GET';

class APIService {
  // tslint:disable-next-line: variable-name
  _url = 'https://dog.ceo/api/breeds/list/all';
  // tslint:disable-next-line: variable-name
  _method: ApiMethod = 'GET';

  constructor() { }

  public setHeaders(headers: KeyValue<string, string>[]): APIService {
    return this;
  }
  public setMethod(newMethod: ApiMethod): APIService {
    this._method = newMethod;
    return this;
  }

  retrieveDogs() {
    return axios({
      method: this._method,
      url: this._url
    });
  }
}

const api = new APIService();

api.retrieveDogs().then((data: object) => console.log(data));
