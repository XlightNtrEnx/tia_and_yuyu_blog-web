import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { styled } from "styled-components";

interface InternalLinkProps {
  children: ReactNode;
  to: string;
}

export const InternalLink = ({ children, to }: InternalLinkProps) => {
  const StyledLink = styled(Link)`
    text-decoration: none;
    padding: 0.5rem;
    line-height: 1;
    text-align: center;
  `;
  return <StyledLink to={to}>{children}</StyledLink>;
};