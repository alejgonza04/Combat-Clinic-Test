import React from 'react';
import ProgressBarChart from '../components/ProgressBarChart.jsx';
import ProgressPie from '../components/ProgressPie.jsx';
import { useSession } from '../components/SessionContext.jsx';
import styled from "styled-components";

const Container = styled.div`
height: 100%;
flex: 1;
display: flex;
justify-content: center;
align-items: flex-start;
padding: 22px 0px;
overflow-y: scroll;
overflow-x: scroll;
`;

const Wrapper = styled.div`
flex: 1;
max-width: 1400px;
display: flex;
justify-content: center;
align-items: center;
gap: 22px;
@media (max-width: 768px){
    flex-direction: column;
    padding: 0px 0px 50px 0px
}
`;

const Text = styled.div`
font-weight: 800;
color: white;
font-size: 35px;
padding: 10px;
@media (max-width: 768px){
    font-size: 21px;
    text-align: center;
}
@media (max-width: 450px) {
    font-size: 20px;
    text-align: center;
  }
`;

const Card = styled.div`
height: auto;
width: 550px;
padding: 24px;
border: 1px solid ${({ theme }) => theme.black + 20};
border-radius: 20px;
background: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.80));
box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.black + 15};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 1;
@media (max-width: 768px) {
    padding: 16px;
    width: 600px;
    height: auto;
    border-radius: 20px;
}
@media (max-width: 450px) {
    padding: 16px;
    width: 300px;
    height: auto;
    border-radius: 20px;
}
`;

const Card2 = styled.div`
height: auto;
width: 550px;
padding: 24px;
border: 1px solid ${({ theme }) => theme.black + 20};
border-radius: 20px;
background: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.80));
box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.black + 15};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 1;
@media (max-width: 768px) {
  padding: 16px;
  width: 600px;
  height: auto;
  border-radius: 20px;
}
@media (max-width: 450px) {
    padding: 16px;
    width: 300px;
    height: auto;
    border-radius: 20px;
}
`;

const ChartContainer = styled.div`
  width: 280px;
  height: 280px;
  @media (max-width: 768px){
    width: 280px;
    height: 280px;
}
`;

const Progress = () => {
    const { sessions } = useSession();

    const totalBJJ = sessions.reduce((total, session) => {
        if (session.sessionType === "BJJ") {
            const sessionLength = parseInt(session.sessionLength.replace('h', ''));
            return total + sessionLength;
        } else {
            return total;
        }
    }, 0);
    
    const totalThai = sessions.reduce((total, session) => {
        if (session.sessionType === "Muay Thai") {
            const sessionLength = parseInt(session.sessionLength.replace('h', ''));
            return total + sessionLength;
        } else {
            return total;
        }
    }, 0);
    
    const totalBoxing = sessions.reduce((total, session) => {
        if (session.sessionType === "Boxing") {
            const sessionLength = parseInt(session.sessionLength.replace('h', ''));
            return total + sessionLength;
        } else {
            return total;
        }
    }, 0);
    
    const totalWrestling = sessions.reduce((total, session) => {
        if (session.sessionType === "Wrestling") {
            const sessionLength = parseInt(session.sessionLength.replace('h', ''));
            return total + sessionLength;
        } else {
            return total;
        }
    }, 0);

    const calcTotalTrainingTimeByDay = () => {
        const totalsByDay = {};

        sessions.forEach(session => {
            const date = session.date.toLocaleDateString();
            const sessionLength = parseInt(session.sessionLength.replace('h','')) || 0;
            totalsByDay[date] = (totalsByDay[date] || 0) + sessionLength;
        });
        return Object.entries(totalsByDay).map(([date, total]) => ({ date, total}));
    };

  const barData = {
    labels: calcTotalTrainingTimeByDay().map(entry => entry.date),
    datasets: [
        {
        label: 'Training Hours',
        data: calcTotalTrainingTimeByDay().map(entry => entry.total),
        backgroundColor: 'rgba(239, 83, 80, 0.3)',
        borderColor: 'rgba(239, 83, 80, 1)',
        borderWidth: 1,
        },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
        },
    },
  };

  const pieData = {
    labels: ['BJJ', 'Muay Thai', 'Boxing', 'Wrestling'],
    datasets: [
        {
            data: [totalBJJ, totalThai, totalBoxing, totalWrestling],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
              ],
              borderWidth: 1,
        },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
        }
    }
  }

  return (
    <Container>
        <Wrapper>
            <Card>
                <Text>Training Hours</Text>
                <ProgressBarChart data={barData} options={barOptions} />
            </Card>
            <Card2>
                <Text>Discipline Distribution Hours</Text>
                <ChartContainer>
                <ProgressPie data={pieData} options={pieOptions} />
                </ChartContainer>
            </Card2>
        </Wrapper>
      </Container>
  )
}

export default Progress
