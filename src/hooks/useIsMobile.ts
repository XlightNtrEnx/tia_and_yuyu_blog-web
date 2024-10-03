import { useAtom } from "jotai";
import { useEffect } from "react";

import { isMobileAtom } from "@src/atoms";

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useAtom(isMobileAtom);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return isMobile;
};
