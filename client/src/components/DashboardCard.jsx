import React from "react";
import styled,  { ThemeProvider } from "styled-components";
import { useSession } from '../components/SessionContext.jsx';

const Container = styled.div`
height: 100%;
flex: 1;
display: flex;
padding: 22px 0px;
flex-direction: column;
overflow-y: scroll;
align-items: center;
`;

const Card2 = styled.div`
height: 300px;
width: 875px;
padding: 24px;
border: 1px solid ${({ theme }) => theme.black + 20};
border-radius: 20px;
background: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.80));
box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.black + 15};
display: flex;
align-items: flex-start;
text-align: center;
gap: 20px;
@media (max-width: 768px) {
  padding: 16px;
  border-radius: 10px;
  width: 530px;
  height: 230px;
  border-radius: 20px;
}
@media (max-width: 450px) {
  padding: 16px;
  border-radius: 10px;
  width: 315px;
  height: 120px;
  border-radius: 20px;
}
`;

const Text = styled.div`
font-weight: 800;
color: white;
font-size: 30px;
display: flex;
@media (max-width: 768px) {
  font-size: 21px; 
}
@media (max-width: 450px){
  font-size: 12px;
}
`;

const Text2 = styled.div`
font-weight: 800;
color: ${({ theme }) => theme.red};
font-size: 45px;
display: flex;
@media (max-width: 768px) {
  font-size: 30px; 
}
@media (max-width: 450px){
  font-size: 16px;
}
`;

const DashboardCard = () => {
  const { sessions } = useSession();

  if (!sessions || !Array.isArray(sessions)) {
    return <div>No sessions available.</div>;
  }

  const totalTrainingTime = sessions.reduce((total, session) => {
    const sessionLength = parseInt(session.sessionLength.replace('h',''));
    return total + sessionLength;
  }, 0);

  const totalSparringTime = sessions.reduce((total, session) => {
    const sparringLength = parseInt(session.sparringTime.replace("mins", ""));
    return total + sparringLength;
  }, 0);

  const uniqueDates = new Set(sessions.map(session => {
    const date = new Date(session.date);
    return date.toLocaleDateString();
  }));
  const totalDaysTraining = uniqueDates.size;

  const hours = Math.floor(totalSparringTime / 60);
  const minutes = totalSparringTime % 60;
  const formattedTime = `${hours} hr ${minutes} min`;

  return (
    <Card2>
    <Container>
          <Text>
            Total Training Time:
          </Text>
            <Text2>
              <p>{totalTrainingTime}h</p>
            </Text2>
    </Container>
    <Container>
          <Text>
            Total Sparring Time:
          </Text>
          <Text2>
            <p>{formattedTime}</p>
          </Text2>
    </Container>
    <Container>
          <Text>
            Total Days of Training:
          </Text>
          <Text2>
              <p>{totalDaysTraining}</p>
          </Text2>
    </Container> 
    </Card2>
  )
}

export default DashboardCard
