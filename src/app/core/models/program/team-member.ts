import { prop, required } from '@rxweb/reactive-form-validators';
import { BaseModel } from '../BaseModel';

export class TeamMember extends BaseModel {
  @prop()
  id!: number;
  @required()
  name!: string;
  @prop()
  institutionName!: string;
  @required()
  memberRole!: string;
  @required()
  qualifications!: string;
  @required()
  pastExperience!: string;
}
