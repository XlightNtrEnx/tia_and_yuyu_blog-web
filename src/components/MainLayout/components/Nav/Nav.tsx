import { styled } from "styled-components";
import { useAtomValue } from "jotai";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { meService as meStorageService } from "@src/firebase/storage/services";
import { userAtom } from "@src/atoms";
import { paths } from "@src/router";
import Pochacco from "@src/assets/images/pochacco.png";
import NoProfilePictureIcon from "@src/assets/icons/no_profile_picture512.png";
import { Img } from "@src/elements";
import { LoginLink, HomeLink, SignOutButton } from "./components";

const NavHeightInPx = 64;

const NavItemMaxHeightInPx = NavHeightInPx * 0.5;
const NavItemDefaultHeightInPx = NavItemMaxHeightInPx;
const NavItemMaxWidthInPx = 128;
const NavItemDefaultWidthInPx = NavItemMaxWidthInPx * 0.5;

const StyledNav = styled.nav`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  width: 100vw;
  padding: 0 16px;
  height: ${NavHeightInPx}px;
  gap: 0.8rem;
  position: sticky;
  top: 0px;
  justify-content: space-between;
  background: url(${Pochacco});
  background-size: 300px;
  background-repeat: repeat;

  > * {
    max-width: ${NavItemMaxWidthInPx}px;
    width: ${NavItemDefaultWidthInPx}px;
    max-height: ${NavItemMaxHeightInPx}px;
    height: ${NavItemDefaultHeightInPx}px;
    background-color: ${({ theme }) => theme.colors.softerWhite};
    border-radius: 10px;
  }
`;

const StyledImg = styled(Img)`
  width: ${NavItemMaxHeightInPx}px;
  height: ${NavItemMaxHeightInPx}px;
  border-radius: 50%;
`;

export const Nav = () => {
  const user = useAtomValue(userAtom);
  const [src, setSrc] = useState<string>(NoProfilePictureIcon);
  const location = useLocation();

  useEffect(() => {
    async function fetchProfilePic() {
      let url = "";
      if (user && user.profilePicStoragePath)
        url = await meStorageService.getDownloadURLFromStorageURL(
          user.profilePicStoragePath
        );
      setSrc(url);
    }
    fetchProfilePic();
  }, [user]);

  const onError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = NoProfilePictureIcon;
  };
  return (
    <StyledNav>
      <HomeLink />
      <StyledImg src={src} alt="User Profile Picture" onError={onError} />
      {user ? (
        <SignOutButton />
      ) : location.pathname !== paths.login ? (
        <LoginLink />
      ) : null}
    </StyledNav>
  );
};
