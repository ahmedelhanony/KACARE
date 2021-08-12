import { Injectable, Injector } from "@angular/core";
import { SERVICES } from "src/app/Shared/utils/enums";
import { ProgramsService } from "./program.service";

@Injectable()
export class PdevelopmentService extends ProgramsService {

    constructor(public injector: Injector) { super(injector); }

    protected serviceName: string = SERVICES.Pdevelopment;
}