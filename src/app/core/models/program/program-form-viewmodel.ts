import { FormArray, FormGroup } from '@angular/forms';
import { FILES } from 'src/app/Shared/utils/enums';
import { FeedbackModel } from './feedback-model';

export class ProgramFormModel {
  programId!: number;
  ProgramFormGroup!: FormGroup;
  members!: FormArray;
  feedback!: FeedbackModel;
  FeedbackFormGroup!: FormGroup;
  rfpTopicOptions: any;
  bidderClassification: any;
  steper = [];
  edit: boolean = false;
  orgFirstName: any;
  allowedAttachmentExtensions = FILES.AllowedAttachmentExtensions;
  allowedAttachmentPdfExtensions = FILES.AllowedAttachmenPdftExtensions;
  allowedAll = FILES.AllowedAll;
  yesNoQuestion = [
    { text: 'Yes', value: true },
    { text: 'No', value: false },
  ];
  readOnlyField: boolean = false;
}
