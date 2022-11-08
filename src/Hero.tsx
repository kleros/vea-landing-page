import React from "react";
import styled, { css } from "styled-components";
import Mountains from "svgs/hero/static-full.svg";
import SocialButtons from "components/SocialButtons";
import BuiltByKleros from "components/BuiltByKleros";
import { smallScreenStyle } from "styles/smallScreenStyle";
import { useElementOffsets } from "hooks/useElementOffsets";

const Container = styled.div<{ minHeight: number }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: auto;
  min-height: ${({ minHeight }) => minHeight}px;
  ${({ theme }) => css`
    background: linear-gradient(
      180deg,
      ${theme.color.pink} 0%,
      ${theme.color.light} 16.09%,
      ${theme.color.light} 50%,
      ${theme.color.dark} 50%
    );
  `}
`;

const StyledMountains = styled.div`
  margin-top: 64px;
  background-image: url(${Mountains.toString()});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top left 15%;
  width: 100%;
  min-height: 85vh;

  ${smallScreenStyle(css`
    margin-top: calc(32px + (64 - 32) * (100vw - 300px) / (1250 - 300));
  `)}
`;

const AspectRatio = styled.div`
  aspect-ratio: 1440/1077;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 5%;
  right: calc(5% + ((100vw - 300px) / 2));
  display: flex;
  flex-direction: column;
  gap: 64px;

  ${smallScreenStyle(css`
    gap: calc(16px + (64 - 16) * (100vw - 300px) / (1250 - 300));
  `)}
`;

const Hero: React.FC = () => {
  const [ref, { height, offsetTop }] = useElementOffsets();

  return (
    <Container minHeight={height + offsetTop + 32}>
      <StyledMountains>
        <AspectRatio />
      </StyledMountains>
      <ContentContainer {...{ ref }}>
        <div>
          <h1>VeA.</h1>
          <h2>a blockchain bridge with minimum fees and maximum security</h2>
        </div>
        <h4>join us</h4>
        <SocialButtons />
        <BuiltByKleros />
      </ContentContainer>
    </Container>
  );
};

export default Hero;
