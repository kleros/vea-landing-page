import React from "react";
import styled, { css } from "styled-components";

export interface ICard {
  title?: string;
  body?: string;
  Icon?: React.FC<React.SVGAttributes<SVGElement>>;
}

const StyledDiv = styled.div`
  border-top: 6px solid ${({ theme }) => theme.color.white};
  padding: 32px;
  display: flex;
  gap: 16px;
  ${({ theme }) => css`
    background: linear-gradient(
      180deg,
      ${theme.color.blue} 0%,
      ${theme.color.pink} 100%
    );
  `};

  > .icon {
    width: 96px;
    flex-shrink: 0;
  }
`;

const Title = styled.h4`
  color: ${({ theme }) => theme.color.dark};
  font-family: "Oxanium", sans-serif;
`;

const Body = styled.p`
  color: ${({ theme }) => theme.color.dark};
  font-size: 1rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Card: React.FC<ICard & React.HTMLAttributes<HTMLDivElement>> = ({
  title,
  body,
  Icon,
  ...props
}) => (
  <StyledDiv {...props}>
    {Icon && <Icon className="icon" />}
    <TextContainer>
      {title && <Title>{title}</Title>}
      {body && <Body>{body}</Body>}
    </TextContainer>
  </StyledDiv>
);

export default Card;
