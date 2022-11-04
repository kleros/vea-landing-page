import React from "react";
import styled, { css, keyframes } from "styled-components";
import StaticMountains from "svgs/hero/static-full.svg";
// import Mountain1 from "svgs/hero/mountain-2.svg";
// import Mountain2 from "svgs/hero/mountain-3.svg";
// import Mountain3 from "svgs/hero/mountain-4.svg";
// import Mountain4 from "svgs/hero/mountain-5.svg";
// import Mountain5 from "svgs/hero/mountain-6.svg";

const Container = styled.div`
  position: relative;
`;

// const moveAnimation = keyframes`
//  50% { transform: translateX(40px); }
// `;

// const commonCSS = (x: number) => css`
//   position: absolute;
//   bottom: ${x}px;
//   left: 0px;
//   animation-name: ${moveAnimation};
//   animation-duration: ${x * 100}ms;
//   animation-delay: ${x}0ms;
//   animation-iteration-count: infinite;
//   scale: 1.1;
// `;

// const StyledMountain1 = styled(Mountain1)`
//   ${commonCSS(50)}
// `;
// const StyledMountain2 = styled(Mountain2)`
//   ${commonCSS(60)}
// `;
// const StyledMountain3 = styled(Mountain3)`
//   ${commonCSS(70)}
// `;
// const StyledMountain4 = styled(Mountain4)`
//   ${commonCSS(80)}
// `;
// const StyledMountain5 = styled(Mountain5)`
//   ${commonCSS(0)}
// `;

const StyledStaticMountains = styled(StaticMountains)`
  position: relative;
  margin-top: 4rem;
`;

const Mountains = () => (
  <Container>
    <StyledStaticMountains />
  </Container>
);

export default Mountains;
