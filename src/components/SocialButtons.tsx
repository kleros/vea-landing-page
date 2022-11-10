import React from "react";
import styled, { css } from "styled-components";
import { smallScreenStyle } from "styles/smallScreenStyle";
import Button from "components/Button";
import IconTelegram from "tsx:svgs/icons/telegram.svg";
import IconMail from "tsx:svgs/icons/mail.svg";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  ${smallScreenStyle(css`
    gap: calc(8px + (24 - 8) * (100vw - 300px) / (1250 - 300));
  `)}
`;

const SocialButtons: React.FC<{ className?: string }> = ({ className }) => (
  <Container {...{ className }}>
    <Button text="telegram" href="https://t.me/veabridge" Icon={IconTelegram} />
    <Button
      text="newsletter"
      href="https://mirror.xyz/blog.vea.eth/subscribe"
      Icon={IconMail}
    />
  </Container>
);

export default SocialButtons;
