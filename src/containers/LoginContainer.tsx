import React from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import LoginConponent from '../components/LoginComponent';
import rootReducer from '../modules/reducers';
import { googleLogin, GOOGLE_LOGIN } from '../modules/reducers/login';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(googleLogin);
  };

  useEffect(() => {
    console.log();
  });

  return (
    <StyledDiv>
      <LoginConponent handleLogin={handleLogin} />
    </StyledDiv>
  );
};

// export default LoginContainer;
