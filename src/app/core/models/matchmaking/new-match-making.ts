import { digit, prop, required } from "@rxweb/reactive-form-validators";
import { BaseModel } from "../BaseModel";

export class NewMatchMakingModel extends BaseModel{
    @prop()
    id!: number;
    @required()
    @digit()
    technologyId!: number;
    @required()
    @digit()
    matchMakingRoleId!: number;
    @required()
    details!: string;
    @required()
    contactInfo!: string;
}