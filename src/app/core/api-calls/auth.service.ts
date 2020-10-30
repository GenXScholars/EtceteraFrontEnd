import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiHttpService } from '../services/api-http.service.service';
import { UserService } from '../api-calls/user.service';
import { MerchantService } from '../api-calls/merchant.service';
import { AdminService } from '../api-calls/admin.service';
import { User } from '../../models/user-models';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({ providedIn: 'root' })
export class AuthService {

    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private apiHttpService: ApiHttpService,
        private userService: UserService,
        private merchantService: MerchantService,
        private adminService: AdminService
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    loginUser(username: string, password: string) {
        return this.apiHttpService.post(this.userService.loginUser(), { username, password })
            .pipe(map((user) => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                // this.userSubject.next(user);
                return user;
            }));
    }

    loginMerchant(username: string, password: string) {
      return this.apiHttpService.post(this.merchantService.loginMerchant(), { username, password })
          .pipe(map((user) => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('user', JSON.stringify(user));
              // this.userSubject.next(user);
              return user;
          }));
  }

  loginAdmin(username: string, password: string) {
    return this.apiHttpService.post(this.adminService.loginAdmin(), { username, password })
        .pipe(map((user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            // this.userSubject.next(user);
            return user;
        }));
}

    public saveToken(token: string) {
      window.localStorage.removeItem(TOKEN_KEY);
      window.localStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string {
      return localStorage.getItem(TOKEN_KEY);
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}




