import { prop } from '@rxweb/reactive-form-validators';

export class FiltersModel {
  @prop()
  visible!: boolean;

  @prop()
  technologyId!: number;
  
  @prop()
  matchMakingRoleId!: number;

  @prop()
  dateFrom!: Date;

  @prop()
  dateTo!: Date;
}
