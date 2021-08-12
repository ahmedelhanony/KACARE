import { ProgramFormModel } from '../program-form-viewmodel';
import { NewPOCModel } from './new-poc-model';

export class POCFormModel extends ProgramFormModel {
  poc!: NewPOCModel;
  uploadedFiles: any[] = [];
  formPOCField: any = [];
  srcImg: any;
  srcImgTPT: any;
  imgSize: any;
  binaryToBase64: any;
  binaryToBase64TPT: any;
  binaryToBase64Patent: any;
  otherClassificationId = 7;
  patentFile: any;
}
