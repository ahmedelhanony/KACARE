import { BaseModel } from "../BaseModel";

export class MyMatchMakingModel extends BaseModel {
    searchCriteria: any;
    dtValue = [];
    filterFieldsName: any;
    technologyOptions: any;
    matchMakingRoleOptions: any;
    totalrecords = 0;
    newMatchMaking: any = {};

    colList: Array<any> = [
        { name: 'technology', label: 'Technology', filter: true, sort: false, dropdown: true, options: 'technologyOptions' },
        { name: 'matchMakingRole', label: 'MatchMakingRole', filter: true, sort: false, dropdown: true, options: 'matchMakingRoleOptions' },
        { name: 'details', label: 'Details', filter: true, sort: true, dropdown: false },
        { name: 'contactInfo', label: 'ContactInfo', filter: true, sort: true, dropdown: false }
    ]
}