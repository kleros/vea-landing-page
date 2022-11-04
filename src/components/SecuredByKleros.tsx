import React from "react";
import styled from "styled-components";
import ImageSecuredByKleros from "svgs/secured-by-kleros.svg";

const StyledKlerosLink = styled.a`
  width: fit-content;
  height: fit-content;
  line-height: 0;
  display: block;
  > svg {
    width: 180px;
  }
`;

const SecuredByKleros: React.FC<{ className?: string }> = ({ className }) => (
  <StyledKlerosLink
    href="https://www.kleros.io"
    target="_blank"
    rel="noopener noreferrer"
    {...{ className }}
  >
    <ImageSecuredByKleros />
  </StyledKlerosLink>
);

export default SecuredByKleros;
