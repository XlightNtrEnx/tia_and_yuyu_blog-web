import { styled } from "styled-components";

import { LoginLink, HomeLink } from "./components";

const NavHeightInPx = 64;
const MaxNavItemHeightInPx = NavHeightInPx * 0.5;
const DefaultNavItemHeightInPx = MaxNavItemHeightInPx;

export const Nav = () => {
  const StyledNav = styled.nav`
    display: flex;
    background-color: ${({ theme }) =>
      theme.colors.pallete.splitComplementary.primary};
    align-items: center;
    padding: 0 16px;
    height: ${NavHeightInPx}px;
    gap: 0.8rem;

    > * {
      max-width: 128px;
      max-height: ${MaxNavItemHeightInPx}px;
      height: ${DefaultNavItemHeightInPx}px;
      background-color: ${({ theme }) =>
        theme.colors.pallete.splitComplementary.left};
    }
  `;
  return (
    <StyledNav>
      <HomeLink />
      <LoginLink />
    </StyledNav>
  );
};
