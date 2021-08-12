import {
  digit,
  email,
  prop,
  propArray,
  required,
} from '@rxweb/reactive-form-validators';
import { BaseModel } from '../BaseModel';
import { TeamMember } from './team-member';

export class NewProgramModel extends BaseModel {
  @prop()
  id: any;
  @required()
  title!: string;
  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  bidderInstitiutionalName!: string;
  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  bidderInstitiutionalAddress!: string;
  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  bidderCorporateRegNumber!: string;
  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  principalInvestigator!: string;
  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @email()
  principalInvestigatorEmail!: string;

  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  principalInvestigatorPhone!: string;

  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  principalInvestigatorAddress!: string;
  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  saudiBidder!: boolean;
  @required()
  @digit()
  rfpTopicId!: number;
  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @propArray(TeamMember)
  teamMembers!: Array<TeamMember>;
  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  anticipatedCost!: string;
  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  projectCost!: string;
  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  shareResourcesCost!: string;

  @prop()
  isSubmitted: boolean = false;
}
