import { BaseService } from "./BaseService";

enum UserSubPaths {
  PROFILE_PICTURE_URL = "profile-picture-url/",
}

export class UserService extends BaseService<UserSubPaths> {
  _targetUserId: string = "";

  get targetUserId() {
    return this._targetUserId;
  }

  set targetUserId(value: string) {
    this._targetUserId = value;
  }

  get basePath() {
    return `${this._basePath}/${this.targetUserId}/`;
  }

  constructor() {
    super(`users/`);
  }
}

export const userService = new UserService();
