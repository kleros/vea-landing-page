import React from "react";
import styled from "styled-components";
import Button from "components/Button";
import IconTelegram from "svgs/icons/telegram.svg";
import IconMail from "svgs/icons/mail.svg";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const SocialButtons: React.FC = () => (
  <Container>
    <Button text="telegram" Icon={IconTelegram} />
    <Button text="newsletter" Icon={IconMail} />
  </Container>
);

export default SocialButtons;
