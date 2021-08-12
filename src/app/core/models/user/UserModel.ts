import { email, prop, required } from '@rxweb/reactive-form-validators';
import { BaseModel } from '../BaseModel';

export class UserModel extends BaseModel {
  @required()
  @email()
  email!: string;

  @required()
  password!: string;

  @prop()
  captchaId!: string;
  @prop()
  userEnteredCaptchaCode!: string;
}
