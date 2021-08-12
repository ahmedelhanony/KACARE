import { prop, required } from '@rxweb/reactive-form-validators';
import { NewProgramModel } from '../new-program-model';

export class NewFeasModel extends NewProgramModel {
  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  technologyDescription!: string;

  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  operationPrincipals!: string;

  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  technologyApplicability!: string;

  @prop()
  diagram: any;

  //submitButton: boolean = false;
}

export function testRequired(x: any) {
  return x.isSubmitted;
}
