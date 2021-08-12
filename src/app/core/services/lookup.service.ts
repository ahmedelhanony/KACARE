import { Injectable, Injector } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "./base.service";

@Injectable()
export class LookupService extends BaseService {
    option = {withCredentials : true}
    constructor(public injector: Injector) { super(injector) }

    public getAll(servicename : string) {
        return this.http.get<any[]>(environment.base_URL + servicename);
    }

    public getById(servicename : string,id:number) {
        return this.http.get<any[]>(environment.base_URL + `${servicename}/${id}`);
    }


}
