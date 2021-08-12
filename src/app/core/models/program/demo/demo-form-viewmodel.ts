import { ProgramFormModel } from '../program-form-viewmodel';
import { NewDemoModel } from './new-demo-model';

export class DemoFormModel extends ProgramFormModel {
  demo!: NewDemoModel;
  uploadedFiles: any[] = [];
  formDemoField: any = [];
  srcImg: any;
  imgSize: any;
  binaryToBase64: any;
}
