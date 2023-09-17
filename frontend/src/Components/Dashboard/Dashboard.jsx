import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #f9f9f9, #e0e0e0);
  padding: 2rem;
`;

const DashboardHeader = styled.h1`
  font-size: 2.5rem;
  color: var(--secondary);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const DashboardContent = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WorkoutCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 0.5rem 0;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/workouts')
      .then(response => {
        setWorkouts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  return (
    <DashboardContainer>
      <DashboardHeader>Workout Dashboard</DashboardHeader>
      <DashboardContent>
        {loading ? (
          <p>Loading...</p>
        ) : (
          workouts.map((workout, index) => (
            <WorkoutCard key={index}>
              <h2>{workout.routineName}</h2>
              {/* Additional workout details can go here */}
            </WorkoutCard>
          ))
        )}
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;
