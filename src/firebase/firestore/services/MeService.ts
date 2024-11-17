import { UserService } from "./UserService";

export class MeService extends UserService {
  _targetUserId = "";

  get targetUserId() {
    if (!this._targetUserId) throw new Error("Target user ID is not set");
    return this._targetUserId;
  }

  set targetUserId(id: string) {
    this._targetUserId = id;
  }

  async getMe() {
    return this.findOne({ id: this.targetUserId });
  }
}

export const meService = new MeService();
