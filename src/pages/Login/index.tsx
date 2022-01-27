import React from 'react';
import { LoginContainer } from '../../containers/LoginContainer';
import MainLayout from '../../layout/MainLayout';

const Login = () => {
  return <MainLayout child={<LoginContainer />} />;
};

export default Login;
