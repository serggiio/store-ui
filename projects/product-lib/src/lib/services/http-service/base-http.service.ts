import { HttpClient } from '@angular/common/http';

export abstract class BaseHttpService {
  uri: string;

  constructor(private _http: HttpClient, uri: string) {
    this.uri = uri;
  }

  public get http(): HttpClient {
    return this._http;
  }
}
