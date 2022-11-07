import React from "react";
import styled, { css } from "styled-components";
import IconGavel from "tsx:svgs/icons/gavel.svg";
import IconEconomicSecurity from "tsx:svgs/icons/economic-security.svg";
import IconFasterThan7 from "tsx:svgs/icons/faster-7.svg";
import Card, { ICard } from "components/Card";
import { smallScreenStyle } from "styles/smallScreenStyle";

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
    body: "Cross-chain governance voting and proposal execution.",
    Icon: IconGavel,
  },
  {
    body:
      "For high-value transactions with high security requirements (no " +
      "additional security assumption such as a multisig admin, off-chain " +
      "routing network or middle-chain)",
    Icon: IconEconomicSecurity,
  },
  {
    body:
      "Transactions from optimistic rollups requiring a faster bridging " +
      "than the default 7 days.",
    Icon: IconFasterThan7,
  },
];

const UseCases: React.FC = () => (
  <div>
    <Title>use cases</Title>
    <CardContainer>
      {CARDS.map((card, i) => (
        <Card key={i} {...card} />
      ))}
    </CardContainer>
  </div>
);

export default UseCases;
