import React from 'react';
import styled from 'styled-components';
import LoginConponent from '../components/LoginComponent';

const StyledDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LoginContainer = () => {
  return (
    <StyledDiv>
      <LoginConponent />
    </StyledDiv>
  );
};

// export default LoginContainer;
