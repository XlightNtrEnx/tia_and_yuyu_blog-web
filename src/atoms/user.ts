import { atom } from "jotai";

import { IUser } from "@src/firebase/firestore/services";

export type User = Omit<IUser, "createdAt" | "updatedAt">;

export const userAtom = atom<User | null>(null);
