import { Injectable } from '@angular/core';
// import { Observable, BehaviorSubject } from 'rxjs';
// import { map, filter, tap, distinctUntilChanged } from 'rxjs/operators';
// import { environment } from '../../../environments/environment';
// import { LoginModel } from '../models/login-model';
// import { Router } from '@angular/router';
// import { CurrentUser } from '../models/user-model';
// import * as _ from 'lodash';
// import { ApiService } from './api-services/api.service';
// import { USER } from './api-services/config/user-config';
// import { FirebaseService } from './firebase/firebase.service';

@Injectable()
export class AuthService {
  // public ApiBaseUrl = `${environment.API_BASE_URL}`;
  // // emit the last value to all late or new subscribers as well emit null firstly
  // private currentUserSubject = new BehaviorSubject<CurrentUser>(null);
  // public currentUser$ = this.currentUserSubject.asObservable();
  // private timer;
  // private fb_token = null;
  // constructor(private apiService: ApiService, private router: Router, private firebase: FirebaseService) {
  // 	this.firebase.currentFbToken$.pipe(distinctUntilChanged()).subscribe((fbToken) => {
  // 		this.fb_token = fbToken;
  // 	});
  // }
  // login(loginModel: LoginModel): Observable<any> {
  // 	return this.apiService
  // 		.request<any>(USER.LOGIN.ID, { ...loginModel, firebase_token: this.fb_token })
  // 		.pipe(
  // 			filter((x) => !!x.data),
  // 			map((x) => x.data),
  // 			tap((user: CurrentUser) => {
  // 				this.setCurrentUser(user);
  // 			})
  // 		);
  // }
  // setCurrentUser(userData: CurrentUser) {
  // 	const { token, firebase_token, ...user } = userData;
  // 	if (token) {
  // 		localStorage.setItem('token', token);
  // 	}
  // 	localStorage.setItem('user', JSON.stringify(user));
  // 	this.currentUserSubject.next(user);
  // 	this.setRefreshTokeTimer();
  // }
  // checkCurrentAuth() {
  // 	if (!this.isTokenAndUserExist()) {
  // 		this.logout();
  // 		return;
  // 	}
  // 	if (!this.isTokenValid()) {
  // 		this.refreshToken();
  // 		return;
  // 	}
  // 	if (window.location.pathname === '/login') {
  // 		this.router.navigate(['/pages']);
  // 	}
  // 	this.setRefreshTokeTimer();
  // 	this.getCurrentUserData();
  // }
  // private getCurrentUserData() {
  // 	if (!this.isTokenAndUserExist()) {
  // 		this.logout();
  // 	}
  // 	const user = JSON.parse(localStorage.getItem('user'));
  // 	this.apiService
  // 		.request<any>(
  // 			USER.GET_CURRENT_USER.ID,
  // 			{},
  // 			{
  // 				urlParams: { userId: user.id },
  // 			}
  // 		)
  // 		.pipe(
  // 			filter((x) => !!x.data),
  // 			map((x) => x.data)
  // 		)
  // 		.subscribe((user: CurrentUser) => {
  // 			this.setCurrentUser(user);
  // 		});
  // }
  // isTokenAndUserExist(): boolean {
  // 	const token = localStorage.getItem('token');
  // 	const user = JSON.parse(localStorage.getItem('user'));
  // 	if (!token || !user || (user && !user.id)) {
  // 		return false;
  // 	}
  // 	return true;
  // }
  // private isTokenValid(): boolean {
  // 	const token = localStorage.getItem('token');
  // 	const { exp } = this.getDecodedToken(token);
  // 	return exp > Math.ceil(new Date().getTime() / 1000);
  // }
  // isAuthenticated() {
  // 	return this.isTokenAndUserExist() && this.isTokenValid();
  // }
  // private getDecodedToken(token) {
  // 	return JSON.parse(atob(token.split('.')[1]));
  // }
  // private setRefreshTokeTimer() {
  // 	const token = localStorage.getItem('token');
  // 	const { exp } = this.getDecodedToken(token);
  // 	if (this.timer) {
  // 		clearTimeout(this.timer);
  // 	}
  // 	const refreshTokenTollerance = 2000; //2 seconds
  // 	this.timer = setTimeout(() => {
  // 		this.refreshToken();
  // 	}, exp * 1000 - new Date().getTime() - refreshTokenTollerance);
  // }
  // logout() {
  // 	clearTimeout(this.timer);
  // 	this.removeTokenAndRestUser();
  // 	this.router.navigateByUrl('/login');
  // }
  // removeTokenAndRestUser() {
  // 	localStorage.removeItem('token');
  // 	localStorage.removeItem('user');
  // 	if (this.currentUserSubject.value) {
  // 		this.currentUserSubject.next(null);
  // 	}
  // }
  // refreshToken() {
  // 	this.apiService.request<any>(USER.REFRESH_TOKEN.ID, {}).subscribe(
  // 		(response) => {
  // 			if (response.token) {
  // 				localStorage.setItem('token', response.token);
  // 			}
  // 			const user = JSON.parse(localStorage.getItem('user'));
  // 			this.currentUserSubject.next(user);
  // 			this.setRefreshTokeTimer();
  // 		},
  // 		() => {
  // 			this.logout();
  // 		}
  // 	);
  // }
}
