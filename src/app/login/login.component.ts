import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../_services/token-storage.service";
import {User} from "../models/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    rememberMe: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  username = '';

  constructor(private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.username = this.tokenStorage.getUser().username;
    }
  }

  onSubmit(): void {
    const {username, password, rememberMe} = this.form;

    // Mock, in production call auth API and parse result

    if ((username === "admin") && password === "admin") {

      let myUser = new User(1, "admin", "admin@arkandas.com", ["ROLE_ADMIN"], "dummyToken", "Bearer");

      this.tokenStorage.saveToken("DummyToken");
      this.tokenStorage.saveUser(myUser);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      // @ts-ignore
      this.roles = this.tokenStorage.getToken().roles;
      this.reloadPage();
    } else {
      this.errorMessage = "Invalid user name or password";
      this.isLoginFailed = true;
    }
  }

  reloadPage(): void {
    window.location.reload();
  }

}

