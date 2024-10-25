import { getStorage } from "firebase/storage";

import { app } from "@src/firebase/app";

export const storage = getStorage(app);
