import React, { useState } from "react";
import styled from "styled-components";

const PlayerRegistration = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
  };

  return (
    <Container>
      <HeadingContainer>
        <BackButton>back</BackButton>
        <Heading>ace</Heading>
      </HeadingContainer>
      <Form onSubmit={handleSubmit}>
        <InputText
          type="text"
          value={input}
          name="fname"
          placeholder="First Name"
          onChange={handleChange}
        />
        <InputText
          type="text"
          value={input}
          name="lname"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <InputText
          type="text"
          value={input}
          name="age"
          placeholder="Age"
          onChange={handleChange}
        />
        <InputText
          type="text"
          value={input}
          name="gender"
          placeholder="Gender"
          onChange={handleChange}
        />
        <Button>add player</Button>
      </Form>
    </Container>
  );
};

export default PlayerRegistration;

const Container = styled.div`
  width: 25%;
  height: 90vh;
  margin: 1.5rem auto;
  background: #9acd32;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const Heading = styled.h1`
  color: #ffffff;
  font-size: 3rem;
  text-transform: uppercase;
  padding: 1rem;
  margin-top: -2.5rem;
  margin-right: -1.2rem;
`;

const BackButton = styled.a`
  text-transform: capitalize;
  text-decoration: none;
  color: #5d5454;
  font-weight: bolder;
  cursor: pointer;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: -1.2rem;
`;

const InputText = styled.input`
  width: 17rem;
  height: 1.5rem;
  margin-bottom: 1rem;
  background: #fff6e6;
  border: 1px solid #9acd32;
  border-radius: 0.3rem;
  font-size: 1rem;
  padding: 0.5rem;
  color: #c9c9c9;
  font-weight: bolder;
`;

const Button = styled.button`
  width: 10rem;
  height: 2.5rem;
  color: #9acd32;
  box-shadow: 0px 3px 6px #00000029;
  text-transform: uppercase;
  padding: 0.5rem 0.7rem;
  border: 1px solid #9acd32;
  border-radius: 0.5rem;
  box-shadow: 0px 3px 6px #00000029;
  font-size: 1rem;
  font-weight: bolder;
  margin-top: 2.75rem;
  cursor: pointer;
`;
