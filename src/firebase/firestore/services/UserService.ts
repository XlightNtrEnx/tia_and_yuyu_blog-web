import { BaseSchema, BaseService } from "./BaseService";

export interface IUser extends BaseSchema {
  displayName: string | null;
  email: string | null;
  profilePhotoURL: string | null;
}

export type UserInsertionAttributes = IUser;

export class UserService extends BaseService<IUser, UserInsertionAttributes> {
  constructor() {
    super("users");
  }

  async insert(
    schema: Parameters<
      BaseService<IUser, UserInsertionAttributes>["insert"]
    >[0] & { id: string }
  ): Promise<string> {
    return super.insert(schema);
  }
}

export const userService = new UserService();
