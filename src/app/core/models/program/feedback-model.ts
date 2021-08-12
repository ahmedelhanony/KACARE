import { prop, required } from '@rxweb/reactive-form-validators';

export class FeedbackModel {
  @required()
  id: any;
  @prop()
  generalFeedback!: string;
  @prop()
  columnFeedback!: string;
  @prop()
  isReviewed!: boolean;
}
