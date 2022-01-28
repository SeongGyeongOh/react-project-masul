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
`;

type PropsType = {
  snsType: string;
  handleLogin: () => void | null;
};

const LoginButton = ({ snsType, handleLogin }: PropsType) => {
  return <StyledButton onClick={() => handleLogin()}>{snsType}</StyledButton>;
};

export default LoginButton;
