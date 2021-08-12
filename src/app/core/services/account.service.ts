import { HttpHeaders } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { SERVICES } from "src/app/Shared/utils/enums";
import { environment } from "src/environments/environment";
// import { environment } from "@env/environment";
import { BaseService } from "./base.service";

@Injectable({providedIn:'root'})
export class AccountService extends BaseService {
    constructor(public injector: Injector) { super(injector) }
    protected serviceName: string = SERVICES.Account;

    signIn(model: any) {
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
        };
        return this.http.post(environment.base_URL + `${this.serviceName}/token/`, model, options);
    }

    verify(model: any) {
        return this.http.post(environment.base_URL + `${this.serviceName}/VerifyAccount/`, model);
    }

    resetPassword(model: any) {
        return this.http.post(environment.base_URL + `${this.serviceName}/ResetPassword/`, model);
    }

    sendResetToken(model: any) {
        return this.http.post(environment.base_URL + `${this.serviceName}/SendPasswordResetToken/`, model);
    }

    sendVerifyToken(model: any) {
        return this.http.post(environment.base_URL + `${this.serviceName}/SendVerificationToken/`, model);
    }

    createAccount(model: any) {
        return this.http.post(environment.base_URL + `${this.serviceName}/RegisterUser/`, model);
    }

    getUserInfo() {
        return this.http.get(environment.base_URL + `${this.serviceName}/CurrentUser`);
    }

    logOut() {
        return this.http.post(environment.base_URL + `${this.serviceName}/Logout`, null);
    }
}