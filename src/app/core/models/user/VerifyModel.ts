import { email, prop, required } from '@rxweb/reactive-form-validators';
import { BaseModel } from '../BaseModel';

export class VerifyModel extends BaseModel {
  @required()
  @email()
  email!: string;

  @required()
  verificationCode!: string;

  @prop()
  captchaId!: string;
  @prop()
  userEnteredCaptchaCode!: string;
}
