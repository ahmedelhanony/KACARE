import { date, prop, required } from '@rxweb/reactive-form-validators';
import { BaseModel } from '../BaseModel';

export class NewArticleModel extends BaseModel {
  @required()
  title!: string;
  @required()
  body!: string;
  @required()
  publishDate: Date = new Date();
  @required()
  image!: any;
  @prop()
  visible!: boolean;
}
