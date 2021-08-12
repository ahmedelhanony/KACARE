import { BaseModel } from "../BaseModel";

export interface IUserProfile extends BaseModel {
    userId: string;
    email: string;
    accessToken: string;
    isAuthenticated: boolean;
    roles: string[];
    fullName: string;
    jobTitle: string;
    mobileNumber: string;
    organizationName: string;
    experienceFields: string;
    generalRole: any;
    isAdminOnly: boolean;
    isUserOnly: boolean;
  }