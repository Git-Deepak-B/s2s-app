import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {UserStoreService} from '../stores/user-store.service';
import {LoginForm} from '../common/types/LoginForm';
import {ServiceResponse} from '../common/types/ServiceResponse';
import {User} from '../common/types/User';


@Injectable()
export class AuthorizationService {

  constructor(private _http: HttpClient, private _userStore: UserStoreService) {
  }

  loginUser(loginForm: LoginForm): Observable<ServiceResponse> {
    return this._http.post('api/authenticate', loginForm).map((user: User) => {
      const resp: ServiceResponse = new ServiceResponse(true, null);
      if (user && user.token) {
        this._userStore.setUser(user);
      } else {
        resp.status = false;
        resp.error = 'Not a valid credentials. Please try again.';
      }
      return resp;
    });
  }

  logout(): ServiceResponse {
    // TODO :: implement logout w.r.t api
    this._userStore.removeCurrentUser();
    return new ServiceResponse(true, null);
  }

}
