import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginForm} from '../../common/types/LoginForm';
import {AuthorizationService} from '../../services/authorization.service';
import {ServiceResponse} from '../../common/types/ServiceResponse';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+[0-9]*$')]),
    password: new FormControl('', Validators.required)
  });

  constructor(private _authService: AuthorizationService,
              private _router: Router) {
  }

  ngOnInit() {
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  signIn(credentials: LoginForm) {
    console.log(credentials.username);
    console.log(credentials.password);
    this._authService.loginUser(credentials).subscribe((resp: ServiceResponse) => {
      if (resp.status) {
        this._router.navigate(['dash']);
      } else {
        this.setLoginError(resp.error);
      }
    }, errResp => this.setLoginError(errResp.error));
  }

  setLoginError(error: String): void {
    this.loginForm.setErrors({isValid: false, message: error});
  }
}
