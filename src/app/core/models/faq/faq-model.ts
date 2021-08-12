import {prop, required} from '@rxweb/reactive-form-validators';
import { BaseModel } from '../BaseModel';

export class FAQModel extends BaseModel {
    @prop()
    id!: number; 
    @required()
    question!: string;
    @required()
    answer!: string;
}