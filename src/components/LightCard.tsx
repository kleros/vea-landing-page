import React from "react";
import styled, { css } from "styled-components";

export interface ILightCard {
  title?: string;
  body?: string;
}

const StyledDiv = styled.div`
  border-left: 6px solid ${({ theme }) => theme.color.white};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${({ theme }) => css`
    background: linear-gradient(
      180deg,
      ${theme.color.blue} 0%,
      ${theme.color.light} 100%
    );
  `};
`;

const Header = styled.h5`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.dark};
`;

const Title = styled.h4`
  color: ${({ theme }) => theme.color.dark};
`;

const Body = styled.p`
  color: ${({ theme }) => theme.color.dark};
  justify-self: end;
`;

const LightCard: React.FC<
  ILightCard & React.HTMLAttributes<HTMLDivElement>
> = ({ title, body }) => (
  <StyledDiv>
    <Header>/\/\/\/\/\/\/\/\/\</Header>
    {title && <Title>{title}</Title>}
    {body && <Body>{body}</Body>}
  </StyledDiv>
);

export default LightCard;
