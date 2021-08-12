import { prop, required } from "@rxweb/reactive-form-validators";
import { BaseModel } from "../BaseModel";

export class NewFAQModel extends BaseModel{
    @required()
    question!: string;
    @prop()
    answer!: string;
    @prop()
    visible!: boolean;
}