import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background);
  color: var(--headline);
`;

const DashboardHeader = styled.h1`
  font-size: 2.5rem;
`;

const DashboardContent = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardHeader>Your Dashboard</DashboardHeader>
      <DashboardContent>
        {/* Your main content here */}
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;
