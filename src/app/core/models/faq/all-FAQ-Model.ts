import { BaseModel } from "../BaseModel";

export class AllFAQModel extends BaseModel{
    searchCriteria: any;
    dtValue=[];
    filterFieldsName: any;
    totalrecords = 0;

    colList: Array<any> = [
        { name: 'question', label: 'Question', filter: true, sort: true},
        { name: 'answer', label: 'Answer', filter: true, sort: true},
        { name: 'visible', label: 'Approved', filter: false, sort: true, icon: true}
    ]
}