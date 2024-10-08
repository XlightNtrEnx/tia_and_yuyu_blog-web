import { getFirestore } from "firebase/firestore";

import { app } from "@src/firebase/app";

export const db = getFirestore(app);
