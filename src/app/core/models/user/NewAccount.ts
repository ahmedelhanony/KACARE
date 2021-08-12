import {
  compare,
  email,
  pattern,
  prop,
  required,
} from '@rxweb/reactive-form-validators';
import { PATTERNS } from 'src/app/Shared/utils/enums';
import { BaseModel } from '../BaseModel';

export class NewAccount extends BaseModel {
  @required()
  fullName!: string;

  @required()
  @email()
  email!: string;

  @required()
  @pattern({
    expression: { pattern: RegExp(PATTERNS.saudiMobilePattern) },
  })
  mobileNumber!: string;

  @required()
  @pattern({
    expression: { pattern: RegExp(PATTERNS.passwordPattern) },
  })
  password!: string;

  @required()
  @compare({ fieldName: 'password' })
  confirmPassword!: string;

  @required()
  generalRoleId!: number;

  @required()
  organizationName!: string;

  @required()
  jobTitle!: string;

  @required()
  experienceFields!: string;

  @required()
  participatedinTLC: boolean = false;

  @prop()
  captchaId!: string;
  @prop()
  userEnteredCaptchaCode!: string;
}
