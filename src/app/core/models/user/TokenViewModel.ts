import { required } from "@rxweb/reactive-form-validators";
import { BaseModel } from "../BaseModel";

export class TokenViewModel extends BaseModel{
    @required()
    email!: string;
}