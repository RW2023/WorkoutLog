import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Register from '../Register/Register';

import styled from 'styled-components';

const Container = styled.div`
  /* Your styles here */
`;

const DashboardContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Container>
      {!isLoggedIn ? (
        <>
          <Login setIsLoggedIn={setIsLoggedIn} />
          <Register setIsLoggedIn={setIsLoggedIn} />
        </>
      ) : (
        <Dashboard />
      )}
    </Container>
  );
};

export default DashboardContainer;
