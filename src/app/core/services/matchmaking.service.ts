import { HttpHeaders } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { SERVICES } from "src/app/Shared/utils/enums";
import { environment } from "src/environments/environment";
import { BaseService } from "./base.service";

@Injectable()
export class MatchMakingService extends BaseService {
    constructor(public injector: Injector) { super(injector) }
    // Ned to be changed
    protected serviceName: string = SERVICES.MatchMaking;

    createMatchMaking(model: any) {
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
        };
        return this.http.post(environment.base_URL + `${this.serviceName}/CreateMatchMaking/`, model, options);
    }

    editMatchMaking(model: any) {
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
        };
        return this.http.post(environment.base_URL + `${this.serviceName}/EditMatchMaking/`, model, options);
    }

    deleteMatchMaking(id:number) {
        return this.http.delete(environment.base_URL + `${this.serviceName}/DeleteMatchMaking/${id}?`);
    }

    getMatchMaking(id:number) {
        return this.http.get<any[]>(environment.base_URL + `${this.serviceName}/GetMatchMaking/${id}?`);
    }

    getMyMatchMaking(query: any) {
        //var students = [{details: "NO More DETAILS", contactInfo: "CONTACTS info"}, {details: "NO More DETAILS2", contactInfo: "CONTACTS info2"}];
        //return new Observable.of(JSON.parse('[{"details": "NO More DETAILS", "contactInfo": "CONTACTS info"}, {"details": "NO More DETAILS2", "contactInfo": "CONTACTS info2"}]'));
        // const studentsObservable = new Observable(observer => {
        //     setTimeout(() => {
        //         observer.next(students);
        //     }, 1000);
        // });

        //return studentsObservable;
        // const options = {
        //     headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
        // };
        return this.http.post<any[]>(environment.base_URL + `${this.serviceName}/GetMyMatchMaking/`, query, { observe: 'response' });
    }

    getMatchMakings(query : any) {
        return this.http.post<any[]>(environment.base_URL + `${this.serviceName}/GetAll/`, query, { observe: 'response' })
    } 
    
    showMatchMaking(model: any) {
        return this.http.post(environment.base_URL + `${this.serviceName}/DeleteMatchMaking/`, model);
    }

    approveMatchMaking(id:number) {
        return this.http.get(environment.base_URL + `${this.serviceName}/ApproveMatchMaking/${id}?`);
    }

    disapproveMatchMaking(id:number) {
        return this.http.get(environment.base_URL + `${this.serviceName}/DisapproveMatchMaking/${id}?`);
    }
}