import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import { RootState } from '../modules/reducers';

const HeaderContainer = () => {
  const { nickname } = useSelector((state: RootState) => ({
    nickname: state.login.nickname,
  }));
  return <Header nickname={nickname} />;
};

export default HeaderContainer;
