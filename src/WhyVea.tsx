import React from "react";
import styled, { css } from "styled-components";
import IconFast from "tsx:svgs/icons/fast.svg";
import IconCheap from "tsx:svgs/icons/cheap.svg";
import IconSecure from "tsx:svgs/icons/secure.svg";
import Card, { ICard } from "components/Card";
import { smallScreenStyle } from "styles/smallScreenStyle";

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 64px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  > * {
    flex: 1;
  }

  ${smallScreenStyle(css`
    > * {
      flex: 100%;
    }
  `)}
`;

const CARDS: ICard[] = [
  {
    title: "Fast",
    Icon: IconFast,
  },
  {
    title: "Cheap",
    Icon: IconCheap,
  },
  {
    title: "Secure",
    Icon: IconSecure,
  },
];

const WhyVea: React.FC = () => (
  <Container>
    <Title>why bridge your messages with VeA?</Title>
    <CardContainer>
      {CARDS.map((card, i) => (
        <Card data-aos="fade-left" key={i} {...card} />
      ))}
    </CardContainer>
  </Container>
);

export default WhyVea;
