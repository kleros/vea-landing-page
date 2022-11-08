import React from "react";
import styled from "styled-components";
import LightCard, { ILightCard } from "components/LightCard";
import Card from "components/Card";
import IconBothWays from "tsx:svgs/icons/both-ways.svg";

const CARDS: ILightCard[] = [
  {
    body:
      "A trust-minimized optimistically-verified bridge with bonded " +
      "participants running a light client to fulfill the roles of oracle, " +
      "challenger and relayer, the keepers.",
  },
  {
    body:
      "Each VEA bridge is composed of a logical pair of contracts (1-to-1 on " +
      "each chain), as opposed to other implementations fully connecting " +
      "every bridge contracts to each others using an off-chain routing " +
      "network (aka a middle chain).",
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
