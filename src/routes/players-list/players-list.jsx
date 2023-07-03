import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PlayersList = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <HeadingWarp>
        <Heading>ace</Heading>
        <SubHeadingContainer>
          <SubHeading>players</SubHeading>
          <Button
            onClick={() => {
              navigate("/player-registration");
            }}
          >
            add player
          </Button>
        </SubHeadingContainer>
      </HeadingWarp>
      <ListContainer>
        <PlayerListContainer>
          <PlayerContainer>
            <FullName>
              <Surname>ndlovu</Surname>
              <br />
              <Name>mpilo</Name>
            </FullName>
            <Updaters>
              <Edit>edit</Edit>
              <Delete>delete</Delete>
            </Updaters>
          </PlayerContainer>
          <HorizontalLine />

          <PlayerContainer>
            <FullName>
              <Surname>mdladla</Surname>
              <br />
              <Name>foca</Name>
            </FullName>
            <Updaters>
              <Edit>edit</Edit>
              <Delete>delete</Delete>
            </Updaters>
          </PlayerContainer>
          <HorizontalLine />

          <PlayerContainer>
            <FullName>
              <Surname>maddi</Surname>
              <br />
              <Name>sphe</Name>
            </FullName>
            <Updaters>
              <Edit>edit</Edit>
              <Delete>delete</Delete>
            </Updaters>
          </PlayerContainer>
          <HorizontalLine />

          <PlayerContainer>
            <FullName>
              <Surname>maddi</Surname>
              <br />
              <Name>sphu</Name>
            </FullName>
            <Updaters>
              <Edit>edit</Edit>
              <Delete>delete</Delete>
            </Updaters>
          </PlayerContainer>
          <HorizontalLine />

          <PlayerContainer>
            <FullName>
              <Surname>Jobe</Surname>
              <br />
              <Name>Phiwo</Name>
            </FullName>
            <Updaters>
              <Edit>edit</Edit>
              <Delete>delete</Delete>
            </Updaters>
          </PlayerContainer>
          <HorizontalLine />

          <PlayerContainer>
            <FullName>
              <Surname>Lindo</Surname>
              <br />
              <Name>mkhize</Name>
            </FullName>
            <Updaters>
              <Edit>edit</Edit>
              <Delete>delete</Delete>
            </Updaters>
          </PlayerContainer>
          <HorizontalLine />
        </PlayerListContainer>
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 25%;
  height: 90vh;
  margin: 1.5rem auto;
  background: #9acd32;
  /* whole page */
  overflow-y: auto;
`;

const HeadingWarp = styled.div`
  width: 100%;
  height: 30%;
`;

const Heading = styled.h1`
  color: #ffffff;
  font-size: 3rem;
  text-transform: uppercase;
  padding: 1rem;
`;

const SubHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  padding: 1rem;
  margin-top: -5rem;
`;

const SubHeading = styled.h1`
  color: #808080;
  font-size: 1.75rem;
`;

const Button = styled.button`
  color: #9acd32;
  box-shadow: 0px 3px 6px #00000029;
  text-transform: uppercase;
  padding: 0.5rem 0.7rem;
  border: 1px solid #9acd32;
  border-radius: 0.3rem;
  box-shadow: 0px 3px 6px #00000029;
  font-size: 0.6rem;
  font-weight: bolder;
`;

const ListContainer = styled.div`
  /* overflow-y: scroll; */
  overflow-x: hidden;
`;

const PlayerListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 91%;
  height: 55%;
  background: #fff6e6;
  padding: 1rem;
  background: #fff6e6;
`;

const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FullName = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  color: #808080;
`;

const Surname = styled.p`
  font-size: 1rem;
`;

const Name = styled.p`
  font-size: 0.9rem;
  margin-top: -2.5rem;
`;

const Updaters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
`;

const Edit = styled.p`
  text-transform: uppercase;
  color: #9acd32;
  font-weight: bold;
  font-size: 0.85rem;
`;
const Delete = styled.p`
  text-transform: uppercase;
  color: #eb5151;
  font-weight: bold;
  font-size: 0.85rem;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  background: #808080;
  opacity: 0.2;
`;

export default PlayersList;
