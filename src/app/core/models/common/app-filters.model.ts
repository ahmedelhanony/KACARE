import { prop } from '@rxweb/reactive-form-validators';
import { SERVICES } from 'src/app/Shared/utils/enums';

export class AppFiltersModel {
  @prop()
  rfpTopicId!: number;

  @prop()
  appId:string = SERVICES.POC
}
