import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  color: black;
  margin: 0.5rem 0rem;
`;

type PropsType = {
  snsType: string;
};

const LoginButton = ({ snsType }: PropsType) => {
  return <StyledButton>{snsType}</StyledButton>;
};

export default LoginButton;
