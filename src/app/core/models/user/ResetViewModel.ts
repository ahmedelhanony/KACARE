import {
  compare,
  email,
  password,
  prop,
  required,
} from '@rxweb/reactive-form-validators';
import { BaseModel } from '../BaseModel';

export class RequestResetModel extends BaseModel {
  @required()
  @email()
  email!: string;

  @prop()
  captchaId!: string;
  @prop()
  userEnteredCaptchaCode!: string;
}

export class ResetModel extends BaseModel {
  @required()
  @email()
  email!: string;
  @required()
  verificationCode!: string;
  @required()
  @password({
    validation: {
      maxLength: 10,
      minLength: 5,
      digit: true,
      specialCharacter: true,
    },
  })
  newPassword!: string;
  @required()
  @compare({ fieldName: 'newPassword' })
  confirmPassword!: string;

  @prop()
  captchaId!: string;
  @prop()
  userEnteredCaptchaCode!: string;
}
