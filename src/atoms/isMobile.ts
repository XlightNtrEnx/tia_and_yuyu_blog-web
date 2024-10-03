import { atom } from "jotai";

export const mobileBreakpoint = 480;
export const isMobileAtom = atom<boolean>(window.innerWidth < mobileBreakpoint);
