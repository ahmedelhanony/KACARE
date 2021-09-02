import { prop, required } from "@rxweb/reactive-form-validators";
// import { SaveEditableRow } from "primeng/table";
import { NewProgramModel } from "../new-program-model";

export class NewDemoModel extends NewProgramModel {
    @required({conditionalExpression: (x:any) => x.isSubmitted})
    @prop()
    marketNeed!: string;

    @required({conditionalExpression: (x:any) => x.isSubmitted})
    @prop()
    technicalConcept!: string;

    @required({conditionalExpression: (x:any) => x.isSubmitted})
    @prop()
    workElements!: string;

    @required({conditionalExpression: (x:any) => x.isSubmitted})
    @prop()
    techPerformance!: string;
    
    @required({conditionalExpression: (x:any) => x.isSubmitted})
    @prop()
    techReadiness!: string;
    @prop()
    diagram: any;
    @required({ conditionalExpression: (x: any) => x.isSubmitted })
    @prop()
    resembledTechnology!: boolean;
    @prop()
    @required({ conditionalExpression: (x: any) => x.isSubmitted && x.resembledTechnology })
    distinguishProject!: string;
    @prop()
    projectDuration!: number;
    @prop()
    offTakerPlan!: string;
    @required({ conditionalExpression: (x: any) => x.isSubmitted })
    @prop()
    ipOwnership!: string;
    @prop()
    noMembersPlan!: string;
    @required({ conditionalExpression: (x: any) => x.isSubmitted })
    @prop()
    businessCase!: string;
    @required({ conditionalExpression: (x: any) => x.isSubmitted })
    @prop()
    ksaBenefit!: string;
    //submitButton: boolean = false;
}