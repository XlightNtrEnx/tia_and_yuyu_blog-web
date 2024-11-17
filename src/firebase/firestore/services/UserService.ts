import { User as AuthUser } from "firebase/auth";

import {
  UserSubPaths,
  userService as userStorageService,
} from "@src/firebase/storage/services";

import { BaseSchema, BaseService } from "./BaseService";

export interface IUser extends BaseSchema {
  displayName: string | null;
  email: string | null;
  profilePicStoragePath: string | null;
  profilePicURL: string | null;
}

export type UserInsertionAttributes = Omit<IUser, "createdAt" | "updatedAt">;

class BaseUserService extends BaseService<IUser, UserInsertionAttributes> {
  constructor() {
    super("users");
  }
}

export class UserService extends BaseUserService {
  userFromAuthUser(authUser: AuthUser): UserInsertionAttributes {
    return {
      id: authUser.uid,
      displayName: authUser.displayName ?? null,
      email: authUser.email ?? null,
      profilePicStoragePath: null,
      profilePicURL: authUser.photoURL ?? null,
    };
  }

  async processInsertionData(schema: UserInsertionAttributes) {
    if (schema.profilePicURL) {
      try {
        console.log("poop");
        const response = await fetch(schema.profilePicURL);
        const blob = await response.blob();
        if (!blob.type.startsWith("image/"))
          throw new Error(`Fetched file is not an image: ${blob.type}`);
        const file = new File([blob], `${schema.id}-profile-picture.jpg`, {
          type: blob.type, // Use the MIME type from the Blob
        });
        const path = await userStorageService.uploadFile(
          file,
          UserSubPaths.PROFILE_PICTURE
        );
        schema.profilePicStoragePath = path;
      } catch (error) {
        schema.profilePicStoragePath = null;
      }
    }
    return schema;
  }
}

export const userService = new UserService();
