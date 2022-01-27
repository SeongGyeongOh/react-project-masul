import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  color: black;
  font-weight: normal;
  border: 1px solid;
  width: 250px;
  height: 50px;
  margin: 1rem 0px;
  font-size: 1.4rem;
`;

type PropsType = {
  snsType: string;
  handleLogin: () => void | null;
};

const LoginButton = ({ snsType, handleLogin }: PropsType) => {
  return <StyledButton onClick={() => handleLogin()}>{snsType}</StyledButton>;
};

export default LoginButton;
