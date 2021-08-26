import { prop } from '@rxweb/reactive-form-validators';

export class AppFiltersModel {
  @prop()
  rfpTopicId!: number;

  @prop()
  appId!: string;

  @prop()
  reviewed!: boolean;

  @prop()
  dateFrom!: Date;

  @prop()
  dateTo!: Date;
}
