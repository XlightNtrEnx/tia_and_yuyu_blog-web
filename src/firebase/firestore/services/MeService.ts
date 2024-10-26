import {
  meService as meStorageService,
  UserSubPaths,
} from "@src/firebase/storage/services";

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

  async insert(schema: Parameters<UserService["insert"]>[0]): Promise<string> {
    const s = { ...schema };
    if (s.profilePhotoURL) {
      const response = await fetch(s.profilePhotoURL);
      if (!response.ok) throw new Error("Failed to fetch profile picture");
      const blob = await response.blob();
      if (!blob.type.startsWith("image/")) {
        throw new Error(`Fetched file is not an image: ${blob.type}`);
      }
      const file = new File([blob], `${s.id}-profile-picture.jpg`, {
        type: blob.type, // Use the MIME type from the Blob
      });
      const downloadURL = await meStorageService.uploadFile(
        file,
        UserSubPaths.PROFILE_PICTURE
      );
      s.profilePhotoURL = downloadURL;
    }
    return super.insert(s);
  }

  async get() {
    const result = await super.filter({ id: this.targetUserId });
    if (result.length === 0) return null;
    return result[0];
  }
}

export const meService = new MeService();
