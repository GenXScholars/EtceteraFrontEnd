import { Role } from "./role";
export class User {
  id?: number;
  username?: string;
  email?: string;
  firstname?: string;
  lastname?: string;
  password?: string;
  walletBalance?: string;
  merchant?: string;
  token?: string;
  role?: Role;
}
