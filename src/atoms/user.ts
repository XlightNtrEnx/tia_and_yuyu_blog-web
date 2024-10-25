import { atom } from "jotai";
import { User } from "firebase/auth";

export const userAtom = atom<User | null>(null);

export const userAtomWithCallback = atom(
  (get) => get(userAtom),
  (_get, set, update: (user: User | null) => User | null) => {
    set(userAtom, update(_get(userAtom)));
  }
);
