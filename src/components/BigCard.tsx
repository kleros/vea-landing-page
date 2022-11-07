import React from "react";
import styled, { css } from "styled-components";
import { smallScreenStyle } from "styles/smallScreenStyle";

export interface IBigCard {
  title?: string;
  body?: string;
  Icon?: React.FC<React.SVGAttributes<SVGElement>>;
}

const StyledDiv = styled.div`
  border-top: 6px solid;
  border-image-slice: 1;
  ${({ theme }) => css`
    border-image-source: linear-gradient(
      to right,
      ${theme.color.blue},
      ${theme.color.pink}
    );
  `}
  padding: 32px;
  background-color: ${({ theme }) => theme.color.purple};

  display: flex;
  ${smallScreenStyle(css`
    flex-wrap: wrap;
  `)}
`;

const TextContainer = styled.div`
  flex: 60%;
`;

const Header = styled.h5`
  color: ${({ theme }) => theme.color.blue};
`;

const Title = styled.h4`
  margin: 24px 0;
`;

const IconContainer = styled.div`
  margin: 32px;
  flex: 40%;
  display: flex;
  > svg {
    margin: auto;
    width: 195px;
  }
`;

const BigCard: React.FC<IBigCard & React.HTMLAttributes<HTMLDivElement>> = ({
  title,
  body,
  Icon,
}) => (
  <StyledDiv>
    <TextContainer>
      <Header>/\/\/\/\/\/\/\/\/\</Header>
      {title && <Title>{title}</Title>}
      {body && <p>{body}</p>}
    </TextContainer>
    {Icon && (
      <IconContainer>
        <Icon className="icon" />
      </IconContainer>
    )}
  </StyledDiv>
);

export default BigCard;
