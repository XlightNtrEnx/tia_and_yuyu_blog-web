import { styled } from "styled-components";
import { useAtomValue } from "jotai";
import { useLocation } from "react-router-dom";

import { userAtom } from "@src/atoms";
import { paths } from "@src/router";
import { LoginLink, HomeLink, SignOutButton } from "./components";

const NavHeightInPx = 64;

const NavItemMaxHeightInPx = NavHeightInPx * 0.5;
const NavItemDefaultHeightInPx = NavItemMaxHeightInPx;
const NavItemMaxWidthInPx = 128;
const NavItemDefaultWidthInPx = NavItemMaxWidthInPx * 0.5;

const StyledNav = styled.nav`
  display: flex;
  background-color: ${({ theme }) =>
    theme.colors.pallete.splitComplementary.primary};
  align-items: center;
  width: 100vw;
  padding: 0 16px;
  height: ${NavHeightInPx}px;
  gap: 0.8rem;
  position: sticky;
  top: 0px;
  justify-content: space-between;

  > * {
    max-width: ${NavItemMaxWidthInPx}px;
    width: ${NavItemDefaultWidthInPx}px;
    max-height: ${NavItemMaxHeightInPx}px;
    height: ${NavItemDefaultHeightInPx}px;
    background-color: ${({ theme }) =>
      theme.colors.pallete.splitComplementary.left};
  }
`;

export const Nav = () => {
  const user = useAtomValue(userAtom);
  const location = useLocation();
  return (
    <StyledNav>
      <HomeLink />
      {user ? (
        <SignOutButton />
      ) : location.pathname !== paths.login ? (
        <LoginLink />
      ) : null}
    </StyledNav>
  );
};
