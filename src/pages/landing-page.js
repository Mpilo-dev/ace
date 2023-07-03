import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LandingPage = () => {
  return (
    <Container>
      <Heading>ace</Heading>
      <SubHeading>game on!</SubHeading>

      <Button>start recruiting</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 25%;
  height: 90vh;
  margin: 1.5rem auto;
  background: #9acd32;
  text-transform: uppercase;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Heading = styled.h1`
  font-size: 8rem;
  color: #ffffff;

  margin-top: -3rem;
`;
const SubHeading = styled.h2`
  font-size: 3rem;
  color: #808080;
  margin-top: -8rem;
`;

const Button = styled.button`
  margin-top: 5rem;
  width: 13rem;
  height: 2.75rem;
  text-transform: uppercase;
  color: #9acd32;
  font-weight: bolder;
  cursor: pointer;
  box-shadow: 0px 3px 6px #00000029;
  padding: 0.5rem;
  border: 1px solid #9acd32;
  border-radius: 0.5rem;
  font-size: 1rem;
`;
export default LandingPage;
