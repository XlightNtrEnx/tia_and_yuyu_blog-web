import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

import { storage } from "@src/firebase/storage";

export abstract class BaseService<SubPaths> {
  protected _basePath: string = "";

  get basePath() {
    return this._basePath;
  }

  set basePath(basePath: string) {
    if (!(basePath.length > 1)) {
      throw new Error("basePath have to be at least 2 characters long");
    } else if (!basePath.endsWith("/")) {
      throw new Error("basePath must end with a '/'");
    }
    this._basePath = basePath;
  }

  constructor(basePath: string) {
    this.basePath = basePath;
  }

  async uploadFile(file: File, subPath?: SubPaths) {
    const path = `${this.basePath}${subPath}${uuidv4()}-${file.name}`;
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  }

  async getDownloadURL(path: string) {
    const storageRef = ref(storage, path);
    return getDownloadURL(storageRef);
  }
}
