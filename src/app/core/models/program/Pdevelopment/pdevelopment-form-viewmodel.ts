import { ProgramFormModel } from '../program-form-viewmodel';
import { NewPdevelopmentModel } from './new-pdevelopment-model';

export class PdevelopmentFormModel extends ProgramFormModel {
  pdevelopment!: NewPdevelopmentModel;
  uploadedFiles: any[] = [];
  formpdevelopmentField: any = [];
  srcImg: any;
  imgSize: any;
  binaryToBase64: any;
}
