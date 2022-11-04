import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    margin: 0px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0px;
  }

  body {
    font-family: "Oxanium", sans-serif;
    background-color: ${({ theme }) => theme.color.dark};
  }

  h1 {
    font-family: "Major Mono Display";
    font-size: 6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.white};
  }

  h2 {
    font-family: "Major Mono Display";
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.color.white};
  }

  h3 {
    font-family: "Major Mono Display";
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.white};
  }

  h4 {
    font-family: "Major Mono Display";
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.color.white};
  }

  h5 {
    font-family: "Major Mono Display";
    font-size: 1.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme.color.white};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.25rem;
    font-weight: 300;
    color: ${({ theme }) => theme.color.white};
  }

  button {
    all: unset;
    box-sizing: border-box;
    :hover {
      cursor: pointer;
    }
  }

  hr {
    opacity: 1;
  }

  svg, img {
    display: inline-block;
    vertical-align: middle;
  }
`;
