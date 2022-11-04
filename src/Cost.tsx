import React from "react";
import styled from "styled-components";
import BigCard, { IBigCard } from "components/BigCard";
import IconUsers from "svgs/icons/users.svg";
import IconKeepers from "svgs/icons/keepers.svg";

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

const CARDS: IBigCard[] = [
  {
    title: "for users",
    body: "Free to use and integrate, for all.",
    Icon: IconUsers,
  },
  {
    title: "for keepers",
    body:
      "We encourage the projects relying on Vea to participate in the " +
      "upkeep of the bridging protocol by running the open-source light " +
      "client.",
    Icon: IconKeepers,
  },
];

const Cost: React.FC = () => (
  <div>
    <Title>how much does it cost?</Title>
    <CardContainer>
      {CARDS.map((card, i) => (
        <BigCard key={i} {...card} />
      ))}
    </CardContainer>
  </div>
);

export default Cost;
