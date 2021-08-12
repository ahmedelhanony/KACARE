import { ProgramFormModel } from "../program-form-viewmodel";
import { NewFeasModel } from "./new-feas-model";

export class FeasFormModel extends ProgramFormModel {
    feas!: NewFeasModel;
    uploadedFiles: any[] = [];
    formfeasField: any = [];
    srcImg: any;
    imgSize: any;
    binaryToBase64: any;
}