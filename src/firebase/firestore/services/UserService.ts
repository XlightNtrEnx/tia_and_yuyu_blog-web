import { BaseSchema, BaseService } from "./BaseService";

export interface IUser extends BaseSchema {
  displayName: string;
  email: string;
  profilePictureURL: string;
}

export type UserInsertionAttributes = IUser;

class UserService extends BaseService<IUser, UserInsertionAttributes> {
  constructor() {
    super("users");
  }
}

export const userService = new UserService();
