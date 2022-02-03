import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  color: white;
  font-weight: normal;
  border: 2px solid white;
  width: 250px;
  height: 50px;
  margin: 1rem 0px;
  font-size: 1.4rem;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0.5rem;
  &:hover {
    border: 2px solid white;
    opacity: 0.8;
    color: #5d94b6;
  }
`;

type PropsType = {
  snsType: string;
  text: string;
  handleLogin: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void | null;
};

const LoginButton = ({ snsType, text, handleLogin }: PropsType) => {
  return (
    <StyledButton id={snsType} onClick={(event) => handleLogin(event)}>
      {text}
    </StyledButton>
  );
};

export default LoginButton;
