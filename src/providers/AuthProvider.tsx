import { useSetAtom } from "jotai";
import { ReactNode, useEffect } from "react";

import { userAtom } from "@src/atoms";
import { meService as meStorageService } from "@src/firebase/storage/services";
import {
  IUser,
  meService as meFirestoreService,
} from "@src/firebase/firestore/services";
import { onAuthStateChangedListener } from "@src/firebase";

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      let me: IUser | null = null;
      if (user) {
        meStorageService.targetUserId = user.uid;
        meFirestoreService.targetUserId = user.uid;
        me = await meFirestoreService.get();
        if (!me) {
          await meFirestoreService.insert({
            id: user.uid,
            email: user.email,
            displayName: user.displayName,
            profilePhotoURL: user.photoURL,
          });
        }
        me = await meFirestoreService.get();
        setUser({ ...user, photoURL: me?.profilePhotoURL ?? null });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [setUser]);

  return <>{children}</>;
};
