import { UserService } from "./UserService";

export class MeService extends UserService {}

/**
 * Whichever variable holds the user ID should set the targetUserId property of this service.
 */
export const meService = new MeService();
