import React from "react";
import styled from "styled-components";
import BigCard, { IBigCard } from "components/BigCard";
import IconUsers from "tsx:svgs/icons/users.svg";
import IconKeepers from "tsx:svgs/icons/run-client.svg"; // TODO: replace by Validators

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
    flex-grow: 1;
  }
`;

const CARDS: IBigCard[] = [
  {
    title: "users",
    body: "Bridge your messages for free, no fees, pay only for gas.",
    Icon: IconUsers,
  },
  {
    title: "validators",
    body:
      "We encourage the projects relying on Vea to participate in the " +
      "upkeep of the bridging protocol by running the open-source light " +
      "client.",
    Icon: IconKeepers,
  },
];

const Participate: React.FC = () => (
  <div>
    <Title>how to participate?</Title>
    <CardContainer>
      {CARDS.map((card, i) => (
        <BigCard key={i} {...card} />
      ))}
    </CardContainer>
  </div>
);

export default Participate;
