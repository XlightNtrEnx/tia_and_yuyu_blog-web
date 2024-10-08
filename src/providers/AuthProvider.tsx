import { useSetAtom } from "jotai";
import { ReactNode, useEffect } from "react";

import { userAtom } from "@src/atoms";
import { onAuthStateChangedListener } from "@src/firebase";

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [setUser]);

  return <>{children}</>;
};
