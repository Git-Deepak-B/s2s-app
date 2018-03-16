import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DashStatusService {

  constructor(private _http: HttpClient) {
  }

  getDashStatus() {
    return this._http.get('api/dashStatus');
  }


}
