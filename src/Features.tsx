import React from "react";
import styled from "styled-components";
import LightCard, { ILightCard } from "components/LightCard";

const FEATURES: ILightCard[] = [
  {
    title: "trust-minimized",
    body:
      "Requires only 1 of N honest parties. There is no 3rd party " +
      "validator, no whitelist of bridge operators.",
  },
  {
    title: "no back door",
    body: "There is no multi-sign admin access, unlike most bridges.",
  },
  {
    title: "immutability",
    body: "Contracts are not upgradable.",
  },
  {
    title: "generalized",
    body: "Message passing on EVM chains.",
  },
  {
    title: "trust model",
    body: "Same as optimistic rollups, at least 1 hones participant.",
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
    flex-basis: 30%;
    flex-grow: 0;
  }
`;

const Features: React.FC = () => (
  <div>
    <Title>features</Title>
    <CardContainer>
      {FEATURES.map((feature, i) => (
        <LightCard key={i} {...feature} />
      ))}
    </CardContainer>
  </div>
);

export default Features;
