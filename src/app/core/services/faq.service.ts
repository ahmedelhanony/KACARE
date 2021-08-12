import { HttpHeaders } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { SERVICES } from "src/app/Shared/utils/enums";
import { environment } from "src/environments/environment";
import { BaseService } from "./base.service";

@Injectable()
export class FAQService extends BaseService {
    constructor(public injector: Injector) { super(injector) }
    // Ned to be changed
    protected serviceName: string = SERVICES.FAQ;

    addQuestion(model: any) {
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
        };
        return this.http.post(environment.base_URL + `${this.serviceName}/addQuestion/`, model, options);
    }

    answerQuestion(model: any) {
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
        };
        return this.http.post(environment.base_URL + `${this.serviceName}/answerQuestion/`, model, options);
    }

    approveQuestion(id:number) {
        return this.http.get(environment.base_URL + `${this.serviceName}/approveQuestion/${id}?`);
    }

    getQuestion(id:number) {
        return this.http.get<any[]>(environment.base_URL + `${this.serviceName}/GetQuestion/${id}?`);
    }

    getQuestions(query:any) {
        return this.http.post<any[]>(environment.base_URL + `${this.serviceName}/GetPagedQuestions/`, query, { observe: 'response' })
    }
    
    deleteQuestion(id : number) {
        return this.http.delete(environment.base_URL + `${this.serviceName}/DeleteQuestion/${id}?`);
    }
}