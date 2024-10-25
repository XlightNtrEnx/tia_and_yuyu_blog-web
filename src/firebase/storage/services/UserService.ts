import { BaseService } from "./BaseService";

enum UserSubPaths {
  PROFILE_PICTURE_URL = "profile-picture-url/",
}

export class UserService extends BaseService<UserSubPaths> {
  userId: string = "";

  constructor() {
    super(`users/`);
  }
}
