import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { styled } from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0.5rem;
  line-height: 1;
  text-align: center;
  border-radius: 10px;
  color: black;
`;

interface InternalLinkProps {
  children: ReactNode;
  to: string;
}

export const InternalLink = ({ children, to }: InternalLinkProps) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
