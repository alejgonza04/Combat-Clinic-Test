import React, { useEffect, useState } from "react";
import newPage from "../utils/images/new-page.png";
import { Link, NavLink } from "react-router-dom";
import styled,  { ThemeProvider } from "styled-components";
import yourPage from "../utils/images/your-page.png";
import progress from "../utils/images/progress.png";

const Container = styled.div`
height: 100%;
flex: 1;
display: flex;
justify-content: center;
gap: 40px;
align-items: flex-start;
overflow-y: scroll;
@media (max-width: 768px) {
  gap: 5px;
}
`;

const Card = styled.div`
height: 230px;
width: 230px;
padding: 24px;
border: 1px solid ${({ theme }) => theme.black + 20};
border-radius: 20px;
background: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.80));
box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.black + 15};
display: flex;
flex-direction: column; /* Arrange children in a column */
align-items: center;
@media (max-width: 768px) {
  padding: 16px;
  border-radius: 10px;
  width: 150px;
  height: 150px;
  border-radius: 20px;
}
@media (max-width: 450px) {
  padding: 10px;
  border-radius: 10px;
  width: 90px;
  height: 80px;
  border-radius: 20px; 
}
`;

const TechLink = styled(NavLink)`
font-weight: 800;
color: ${({ isHovered, theme }) => (isHovered ? theme.red : theme.white)};
font-size: 31px; 
padding: 10px 0px;
transition: all 0.3s ease;
cursor: pointer;
transition: all 1s slide-in;
text-decoration: none;
&:hover {
  color: ${({ theme }) => theme.red};
}
@media (max-width: 768px) {
  font-size: 21px; 
}
@media (max-width: 450px) {
  font-size: 12px; 
}
`;

const Image = styled.img`
width: 130px;
height: 130px;
padding: 10px;
cursor: pointer;
@media (max-width: 768px) {
  width: 80px;
  height: 80px;
}
@media (max-width: 450px) {
  width: 20px;
  height: 20px;
}
`;

const DashboardComp = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
  return (
    <Container>
    <Card>
        <TechLink to='addsession' isHovered={isHovered1}>
        Add Session
        </TechLink>
        <Link to='addsession'>
        <Image src={newPage}
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
        />
        </Link>
      </Card>
        
      <Card>
        <TechLink to='sessions' isHovered={isHovered2}>
        Your Sessions
        </TechLink>
        <Link to='sessions'>
        <Image src={yourPage}
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
        />
        </Link>
      </Card>

      <Card>
        <TechLink to='progress' isHovered={isHovered3}>
        Progress
        </TechLink>
        <Link to='progress'>
        <Image src={progress}
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
        />
        </Link>
      </Card>
      </Container>
  )
}

export default DashboardComp
