import { HttpHeaders } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { SERVICES } from "src/app/Shared/utils/enums";
import { environment } from "src/environments/environment";
import { BaseService } from "./base.service";

@Injectable()
export class ContactUsService extends BaseService {
    constructor(public injector: Injector) { super(injector) }
    // Ned to be changed
    protected serviceName: string = SERVICES.ContactUs;

    addMessage(model: any) {
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
        };
        return this.http.post(environment.base_URL + `${this.serviceName}/AddMessage/`, model, options);
    }
}