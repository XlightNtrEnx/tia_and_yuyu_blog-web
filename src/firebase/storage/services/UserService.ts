import { BaseService } from "./BaseService";

export enum UserSubPaths {
  PROFILE_PICTURE = "profile-picture/",
}

export class UserService extends BaseService<UserSubPaths> {
  _targetUserId: string = "";

  get targetUserId() {
    if (!this._targetUserId) throw new Error("targetUserId is not set.");
    return this._targetUserId;
  }

  set targetUserId(value: string) {
    this._targetUserId = value;
  }

  override getBasePath() {
    return `${this._basePath}/${this.targetUserId}/`;
  }

  constructor() {
    super(`users/`);
  }
}

export const userService = new UserService();
