import type { ReactNode } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 경기천년제목;
  font-size: 5rem;
`;

const Header = ({ children }: { children: ReactNode }) => {
  return <HeaderWrapper>{children}</HeaderWrapper>;
};

export default Header;
