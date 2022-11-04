import React from "react";
import styled, { css } from "styled-components";

export interface IButton {
  text: string;
  Icon?: React.FC<React.SVGAttributes<SVGElement>>;
}

const StyledButton = styled.button`
  position: relative;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
  background-color: transparent;
  transition: transform 0.25s ease-in-out;

  > .icon {
    height: 1rem;
    width: auto;
    fill: ${({ theme }) => theme.color.dark};
    z-index: 1;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    aspect-ratio: 1;
    top: 50%;
    left: -10px;
    right: -10px;
    transform: translateY(-50%);
    z-index: 0;
    ${({ theme }) => css`
      background-image: linear-gradient(
        90deg,
        ${theme.color.blue} 0%,
        ${theme.color.pink} 100%
      );
    `}
    transition: transform 0.25s ease-in-out;
  }

  :hover {
    transform: scale(1.05);
    &:after {
      transform: translateY(-50%) rotate(180deg);
    }
  }
`;

const Text = styled.p`
  font-family: "Major Mono Display";
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.dark};
  z-index: 1;
`;

const Button: React.FC<IButton & React.HTMLAttributes<HTMLButtonElement>> = ({
  text,
  Icon,
  ...props
}) => (
  <StyledButton {...props}>
    {Icon && <Icon className="icon" />}
    <Text>{text}</Text>
  </StyledButton>
);

export default Button;
