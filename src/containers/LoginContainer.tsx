import React from 'react';
import styled from 'styled-components';
import LoginConponent from '../components/LoginComponent';

const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = () => {
  return (
    <StyledDiv>
      <LoginConponent />
    </StyledDiv>
  );
};

// export default LoginContainer;
