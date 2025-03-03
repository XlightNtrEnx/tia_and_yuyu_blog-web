import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

import { storage } from "@src/firebase/storage";

export abstract class BaseService<Paths> {
  protected _basePath: string = "";

  public get basePath() {
    return this.getBasePath();
  }

  getBasePath() {
    return this._basePath;
  }

  public set basePath(basePath: string) {
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

  async uploadFile(file: File, path?: Paths) {
    const filepath = `${this.basePath}${path}${uuidv4()}-${file.name}`;
    const storageRef = ref(storage, filepath);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  }

  async getDownloadURLFromStorageURL(path: string) {
    const storageRef = ref(storage, path);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  }
}
