import {
  digit,
  prop,
  required,
} from '@rxweb/reactive-form-validators';
import { BClassification } from 'src/app/Shared/utils/enums';
import { NewProgramModel } from '../new-program-model';

export class NewPOCModel extends NewProgramModel {

  @required({
    conditionalExpression: (x: { isSubmitted: any }) => x.isSubmitted,
  })
  @prop()
  isEtmad!: boolean;

  @required({
    conditionalExpression: (x: { isSubmitted: any; isEtmad: any }) =>
      x.isSubmitted && x.isEtmad,
  })
  @prop()
  etmadName!: string;

  @required({
    conditionalExpression: (x: { isSubmitted: any }) => x.isSubmitted,
  })
  @prop()
  hasPrototypeTesting!: boolean;

  @required({
    conditionalExpression: (x: { isSubmitted: any }) => x.isSubmitted,
  })
  @prop()
  hasIntellectualProp!: boolean;

  @required({
    conditionalExpression: (x: { isSubmitted: any }) => x.isSubmitted,
  })
  @prop()
  isForegroundProp!: boolean;
  @prop()
  diagram: any;
  @prop()
  tptDiagram: any;
  @required({
    conditionalExpression: (x: {
      isSubmitted: any;
      hasIntellectualProp: any;
    }) => x.isSubmitted && x.hasIntellectualProp,
  })
  @prop()
  patentAttachement: any;
  @required({
    conditionalExpression: (x: { isSubmitted: any; bClassId: any }) =>
      x.isSubmitted && x.bClassId == BClassification.Other,
  })
  @prop()
  otherClassification!: string;
  @required()
  @digit()
  bClassId!: number;
  @required({
    conditionalExpression: (x: { isSubmitted: any; isEtmad: any }) =>
      x.isSubmitted && x.isEtmad,
  })
  @prop()
  technicalAbstract!: string;
  @required({
    conditionalExpression: (x: { isSubmitted: any; isEtmad: any }) =>
      x.isSubmitted && x.isEtmad,
  })
  @prop()
  technicalPerformanceTarget!: string;
  @required({
    conditionalExpression: (x: { isSubmitted: any; isEtmad: any }) =>
      x.isSubmitted && x.isEtmad,
  })
  @prop()
  technologyReadinessLevel!: string;
  @required({
    conditionalExpression: (x: { isSubmitted: any; isEtmad: any }) =>
      x.isSubmitted && x.isEtmad,
  })
  @prop()
  projectExecutionLocation!: string;
}

export function testRequired(x: { isSubmitted: any }) {
  return x.isSubmitted;
}
