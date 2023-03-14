import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Hero from "./Hero";
import WhyVea from "./WhyVea";
import Features from "./Features";
import UseCases from "./UseCases";
import Participate from "./Participate";
import HowDoesItWork from "./HowDoesItWork";
import BecomeAKeeper from "./BecomeAKeeper";
import Launch from "./Launch";
import Footer from "./Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MiddleSections = styled.div`
  max-width: 1700px;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 128px;
`;

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <Container>
      <MiddleSections>
        <WhyVea />
        <HowDoesItWork />
        <Features />
        <Participate />
        <UseCases />
        <BecomeAKeeper />
        <Launch />
      </MiddleSections>
    </Container>
    <Footer />
  </div>
);

export default App;
