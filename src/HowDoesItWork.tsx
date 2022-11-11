import React from "react";
import styled from "styled-components";
import LightCard, { ILightCard } from "components/LightCard";
import Card from "components/Card";
import IconBothWays from "tsx:svgs/icons/both-ways.svg";

const CARDS: ILightCard[] = [
  {
    body:
      "VEA is a trust-minimized optimistically-verified bridge with bonded " +
      "participants, known as the keepers, running a light client to fulfill " +
      "the roles of oracle, challenger and relayer.",
  },
  {
    body:
      "As opposed to other implementations that connect every bridge " +
      "contract with each other using an off-chain routing network, each VEA " +
      "bridge is composed of a logical pair of contracts (1-to-1 for each " +
      "connection).",
  },
];

const Title = styled.h2`
  text-align: center;
  margin-bottom: 64px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  > div {
    flex: 1;
  }
`;

const SubTitle = styled.h5`
  text-align: center;
  margin: 48px;
`;

const StyledCard = styled(Card)`
  position: relative;
  width: calc(100% - (max((100% - 400px), 0px) / 2));
  right: -50%;
  transform: translateX(-50%);
`;

const cardBody =
  "In the worst case scenario, VEA just falls back to the native bridge. No " +
  "risk of losing funds.";

const HowDoesItWork: React.FC = () => (
  <div>
    <Title>how does it work?</Title>
    <CardContainer>
      {CARDS.map((feature, i) => (
        <LightCard key={i} {...feature} />
      ))}
    </CardContainer>
    <SubTitle>what if a keeper is malicious?</SubTitle>
    <StyledCard body={cardBody} Icon={IconBothWays} />
  </div>
);

export default HowDoesItWork;
