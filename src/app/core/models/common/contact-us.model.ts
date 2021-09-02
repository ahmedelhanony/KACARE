import { email, prop, required } from '@rxweb/reactive-form-validators';

export class ContactUsModel {
  @required()
  fullName!: string;

  @required()
  @email()
  email!: string;

  @required()
  subject!: string;

  @required()
  message!: string;

  @prop()
  captchaId!: string;
  @prop()
  userEnteredCaptchaCode!: string;
}
