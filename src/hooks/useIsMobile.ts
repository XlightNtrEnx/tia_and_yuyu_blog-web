import { useAtom } from "jotai";
import { useEffect } from "react";

import { isMobileAtom } from "@src/atoms";

let isListenerAdded = false;
let componentsOnHookCount = 0;

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useAtom(isMobileAtom);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    componentsOnHookCount++;
    if (!isListenerAdded) {
      window.addEventListener("resize", handleResize);
      isListenerAdded = true;
    }

    // Set initial value
    handleResize();

    return () => {
      componentsOnHookCount--;
      if (isListenerAdded && componentsOnHookCount <= 0) {
        window.removeEventListener("resize", handleResize);
        isListenerAdded = false;
      }
    };
  }, [setIsMobile]);

  return isMobile;
};
