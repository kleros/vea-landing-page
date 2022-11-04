import React from "react";
import styled, { css } from "styled-components";
import Mountains from "./Mountains";
import SocialButtons from "components/SocialButtons";
import SecuredByKleros from "components/SecuredByKleros";

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: auto;
  ${({ theme }) => css`
    background: linear-gradient(
      180deg,
      ${theme.color.pink} 0%,
      ${theme.color.light} 16.09%
    );
  `}
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 50vh;
  left: 5%;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const Hero: React.FC = () => (
  <Container>
    <Mountains />
    <ContentContainer>
      <div>
        <h1>VeA.</h1>
        <h2>a blockchain bridge with minimum fees and maximum security</h2>
      </div>
      <h4>join us</h4>
      <SocialButtons />
      <SecuredByKleros />
    </ContentContainer>
  </Container>
);

export default Hero;
