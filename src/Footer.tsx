import React from "react";
import styled, { css } from "styled-components";
import { smallScreenStyle } from "styles/smallScreenStyle";
import Lines from "tsx:svgs/footer/lines.svg";
import IconTwitter from "tsx:svgs/icons/twitter.svg";
import IconGithub from "tsx:svgs/icons/github.svg";
import IconTelegram from "tsx:svgs/icons/telegram.svg";
import BuiltByKleros from "components/BuiltByKleros";

const LINKS = [
  {
    Icon: IconTwitter,
    href: "https://www.twitter.com/vea_eth",
  },
  {
    Icon: IconGithub,
    href: "https://www.github.com/kleros/vea",
  },
  {
    Icon: IconTelegram,
    href: "https://t.me/veabridge",
  },
];

const Container = styled.div`
  border-bottom: 16px solid;
  border-image-slice: 1;
  ${({ theme }) => css`
    border-image-source: linear-gradient(
      to right,
      ${theme.color.blue},
      ${theme.color.pink}
    );
  `}
`;

const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Logo = styled.h2`
  text-align: center;
  margin: 24px;
`;

const StyledLink = styled.a`
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    fill: ${({ theme }) => theme.color.white};
    width: 32px;
    transition: fill 0.25s ease, transform 0.25s ease;

    :hover {
      fill: ${({ theme }) => theme.color.blue};
      transform: scale(1.05);
    }
  }

  ${smallScreenStyle(css`
    > svg {
      width: calc(16px + (32 - 16) * (100vw - 300px) / (1250 - 300));
    }
  `)}
`;

const SocialMedia = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  display: flex;
  gap: 16px;
`;

const StyledBuiltByKleros = styled(BuiltByKleros)`
  margin: 32px 0;
  position: relative;
  right: -5%;
`;

const Footer: React.FC = () => (
  <Container>
    <Lines />
    <InnerContainer>
      <Logo>VeA</Logo>
      <SocialMedia>
        {LINKS.map(({ href, Icon }, i) => (
          <StyledLink
            key={i}
            {...{ href }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon />
          </StyledLink>
        ))}
      </SocialMedia>
    </InnerContainer>
    <StyledBuiltByKleros />
  </Container>
);

export default Footer;
