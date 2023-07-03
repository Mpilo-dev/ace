import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PlayerRegistration = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <HeadingContainer>
        <BackButton
          onClick={() => {
            navigate("/");
          }}
        >
          back
        </BackButton>
        <Heading>ace</Heading>
      </HeadingContainer>
      <Form>
        <InputText type="text" name="fname" placeholder="First Name" />
        <InputText type="text" name="lname" placeholder="Last Name" />
        <InputText type="text" name="age" placeholder="Age" />
        <InputText type="text" name="gender" placeholder="Gender" />
        <InputText type="text" name="scode" placeholder="Sport Code" />
        <Button
          onClick={() => {
            navigate("/players-list");
          }}
        >
          add player
        </Button>
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
