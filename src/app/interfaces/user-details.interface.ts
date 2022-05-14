import {IUser} from "./user.interface";

export interface IUserDetails extends IUser {
  username: string;
  email: string;
  phone: string;
  website: string;
  company: iCompany;
}

interface iCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
