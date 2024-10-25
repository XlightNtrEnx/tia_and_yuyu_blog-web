import { UserService } from "./UserService";

export class MeService extends UserService {
  constructor() {
    super();
    this.targetUserId = "me";
  }
}

export const meService = new MeService();
