import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DashStatusService {

  constructor(private _http: HttpClient) {
  }

  getDashStatus() {
    return this._http.get('api/dashStatus');
  }


}
