import React from "react";
import styled from "styled-components";
import IconFast from "svgs/icons/fast.svg";
import IconCheap from "svgs/icons/cheap.svg";
import IconSecure from "svgs/icons/secure.svg";
import Card, { ICard } from "components/Card";

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
  <div>
    <Title>why bridge your messages with VeA?</Title>
    <CardContainer>
      {CARDS.map((card, i) => (
        <Card key={i} {...card} />
      ))}
    </CardContainer>
  </div>
);

export default WhyVea;
