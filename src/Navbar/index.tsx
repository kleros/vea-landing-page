import React from "react";
import styled, { css } from "styled-components";
import { smallScreenStyle } from "styles/smallScreenStyle";
import Menu from "./Menu";

const Container = styled.div`
  height: 64px;
  position: sticky;
  top: 0px;
  z-index: 2;
  background-color: ${({ theme }) => theme.color.pink};
  ${smallScreenStyle(css`
    height: calc(32px + (64 - 32) * (100vw - 300px) / (1250 - 300));
  `)}
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = styled.h5`
  color: ${({ theme }) => theme.color.dark};
`;

const Navbar: React.FC = () => {
  return (
    <Container>
      <StyledTitle>VeA</StyledTitle>
      <Menu />
    </Container>
  );
};

export default Navbar;
