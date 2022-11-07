import React from "react";
import styled, { css } from "styled-components";
import Lines from "tsx:svgs/footer/lines.svg";
import IconTwitter from "tsx:svgs/icons/twitter.svg";
import IconGithub from "tsx:svgs/icons/github.svg";
import IconTelegram from "tsx:svgs/icons/telegram.svg";
import SecuredByKleros from "components/SecuredByKleros";

const LINKS = [
  {
    Icon: IconTwitter,
    href: "https://www.twitter.com",
  },
  {
    Icon: IconGithub,
    href: "",
  },
  {
    Icon: IconTelegram,
    href: "",
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
    fill: white;
    width: 16px;
  }
`;

const SocialMedia = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  display: flex;
  gap: 16px;
`;

const StyledSecuredByKleros = styled(SecuredByKleros)`
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
    <StyledSecuredByKleros />
  </Container>
);

export default Footer;
