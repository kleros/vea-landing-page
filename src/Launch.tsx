import React from "react";
import styled from "styled-components";
import SocialButtons from "components/SocialButtons";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 64px;
  width: 65%;
`;

const Launch: React.FC = () => (
  <Container>
    <Title>VeA is launching soon, stay in touch!</Title>
    <SocialButtons />
  </Container>
);

export default Launch;
