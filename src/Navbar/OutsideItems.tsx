import React from "react";
import styled, { css } from "styled-components";
import { smallScreenStyle } from "styles/smallScreenStyle";

const Container = styled.div`
  display: flex;
  gap: 32px;
  ${smallScreenStyle(css`
    display: none;
  `)}
`;

const StyledA = styled.a`
  text-decoration: none;
  font-family: "Major Mono Display";
  color: ${({ theme }) => theme.color.dark};
`;

const ITEMS = [
  {
    text: "faq",
    url: "https://docs.vea.ninja/faq",
  },
  {
    text: "documentation",
    url: "https://docs.vea.ninja/",
  },
];

const OutsideItems = () => (
  <Container>
    {ITEMS.map(({ text, url }, i) => (
      <StyledA key={i} href={url} target="_blank" rel="noopener noreferrer">
        {text}
      </StyledA>
    ))}
  </Container>
);

export default OutsideItems;
