import { PATTERNS } from 'src/app/Shared/utils/enums';

export class BaseModel {
  isSubmitted: boolean = false;
  emailPattern: string = PATTERNS.emailPattern;
  passwordPattern: string = PATTERNS.passwordPattern;
  mobilePattern: string = PATTERNS.mobilePattern;
  numberpattern: string = PATTERNS.numberPattern;
}
