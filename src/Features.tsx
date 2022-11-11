import React from "react";
import styled, { css } from "styled-components";
import LightCard, { ILightCard } from "components/LightCard";
import { smallScreenStyle } from "styles/smallScreenStyle";

const FEATURES: ILightCard[] = [
  {
    title: "trust-minimized",
    body:
      "VEA has the same trust model as Optimistic Rollups, requires only 1 " +
      "of N parties to be honest. There is no 3rd party validator.",
  },
  {
    title: "no back door",
    body: "Unlike most bridges, there is no multi-sign admin access.",
  },
  {
    title: "immutable",
    body: "Contracts are not upgradable.",
  },
  {
    title: "generalized",
    body: "Arbitrary message passing between EVM chains.",
  },
  {
    title: "no whitelist",
    body: "Interacting with the protocol is permissionless at every level.",
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
  }
  ${smallScreenStyle(css`
    > div {
      flex-basis: 50%;
      flex-grow: 1;
    }
  `)}
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
