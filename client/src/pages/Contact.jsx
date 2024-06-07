import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.div`
height: 100%;
flex: 1;
display: flex;
justify-content: center;
align-items: flex-start;
padding: 22px 0px;
overflow-y: scroll;
`;

const Wrapper = styled.div`
flex: 1;
max-width: 1400px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 22px;
@media (max-width: 600px){
    gap: 12px;
}
`;

const Card = styled.div`
height: 500px;
width: 700px;
padding: 24px;
border: 1px solid ${({ theme }) => theme.black + 20};
border-radius: 20px;
background: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.80));
box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.black + 15};
display: flex;
flex-direction: column;
@media (max-width: 768px) {
  padding: 16px;
  border-radius: 10px;
  height: 500px;
  width: 650px;
  border-radius: 20px;
}
@media (max-width: 450px) {
  padding: 16px;
  border-radius: 10px;
  height: auto;
  width: 320px;
  border-radius: 20px;
  text-align: center;
}
`;

const Text = styled.div`
font-weight: 800;
color: white;
font-size: 60px;
padding: 10px;
@media (max-width: 450px) {
  font-size: 55px;
}
`;

const Text2 = styled.div`
font-weight: 800;
color: white;
font-size: 30px;
padding: 10px 0px;
color: ${({ theme }) => theme.red};
@media screen and (max-width: 768px) {
  font-size: 30px;
}
@media (max-width: 450px) {
  font-size: 20px;
}
`;

const Text3 = styled.div`
font-weight: 800;
color: white;
font-size: 60px;
padding: 10px 0px;
color: ${({ theme }) => theme.white};
@media screen and (max-width: 768px) {
  font-size: 30px;
}
`;

const LinkedIn = styled.a`
font-weight: 800;
color: white;
font-size: 60px;
padding: 10px 0px;
transition: all 0.3s ease;
cursor: pointer;
transition: all 1s slide-in;
text-decoration: none;
&:hover {
  color: ${({ theme }) => theme.red};
}
@media (max-width: 450px) {
  font-size: 45px;
}
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Text>
            About Me:
            <Text2>• Made this page out of my love for martial arts and programming</Text2>
            <Text2>• Hope you enjoy using this application for your martial arts journey</Text2>
            <Text2>• Make sure to keep training. OSU!</Text2>
            <LinkedIn href="https://www.linkedin.com/in/alejandro-gonzalez-6b4752288/" target="_blank">My LinkedIn</LinkedIn>
          </Text>
        </Card>
      </Wrapper>
    </Container>
  )
}

export default Contact