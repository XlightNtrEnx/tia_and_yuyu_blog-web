import { useSetAtom } from "jotai";
import { ReactNode, useEffect } from "react";
import { User as AuthUser } from "firebase/auth";

import { userAtom, User as UserAtom } from "@src/atoms";
import { meService as meStorageService } from "@src/firebase/storage/services";
import { meService as meFirestoreService } from "@src/firebase/firestore/services";
import { onAuthStateChangedListener } from "@src/firebase";

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(
      async (authUser: AuthUser | null) => {
        let me: UserAtom | null = null;
        if (authUser) {
          meStorageService.targetUserId = authUser.uid;
          meFirestoreService.targetUserId = authUser.uid;
          me = await meFirestoreService.getMe();
          if (!me)
            me = await meFirestoreService.insert(
              meFirestoreService.userFromAuthUser(authUser)
            );
          setUser(me);
        } else {
          setUser(null);
        }
      }
    );
    return () => unsubscribe();
  }, [setUser]);

  return <>{children}</>;
};
