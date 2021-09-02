import { prop, required } from '@rxweb/reactive-form-validators';
import { NewProgramModel } from '../new-program-model';

export class NewPdevelopmentModel extends NewProgramModel {
  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  background!: string;

  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  productApplicability!: string;

  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  productAdvantage!: string;

  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  productNovelty!: string;

  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  projectScope!: string;

  @prop()
  offTakerPlan!: string;

  @prop()
  diagram: any;

  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  marketNeed!: string;

  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  businessCase!: string;

  @required({ conditionalExpression: (x: any) => x.isSubmitted })
  @prop()
  ksaBenefit!: string;
  //submitButton: boolean = false;
}

export function testRequired(x: any) {
  return x.isSubmitted;
}
