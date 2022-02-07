import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import LoginComponent from '../components/LoginComponent';
import { RootState } from '../modules/reducers';
import logo_main from '../assets/logo/logo_main.png';
import { LoginService } from '../service/loginService';
import { useNavigate } from 'react-router-dom';
import { logoutAction, setNicknameAction, snsLoginAction } from '../modules/reducers/login';
import { Input } from 'antd';
import { StyledButton } from '../components/LoginComponent/LoginButton/LoginButton';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${logo_main});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #33434d;
  display: flex;
  padding-top: 15rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled(Input)`
  width: 250px;
`;

export const LoginContainer = () => {
  const dispatch = useDispatch();
  const loginService = new LoginService();
  const navigate = useNavigate();
  const nicknameInput = useRef<Input>(null);

  const { isLogin, snsType, nickName, userId } = useSelector((state: RootState) => ({
    isLogin: state.login.isLogin,
    snsType: state.login.snsType,
    nickName: state.login.nickName,
    userId: state.login.userId,
  }));

  const handleLogin = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(snsLoginAction(e.currentTarget.id));
  };

  const handleLogout = () => {
    dispatch(logoutAction(snsType));
  };

  const setNickname = () => {
    const nickname = nicknameInput.current?.state.value;
    nickname ? dispatch(setNicknameAction(nickname, userId, snsType)) : alert('닉네임을 입력해주세요');
  };

  useEffect(() => {}, []);

  return (
    <StyledDiv>
      {isLogin || <LoginComponent handleLogin={handleLogin} handleLogout={handleLogout} isLogin={isLogin} />}
      {isLogin && nickName == null && (
        <>
          <StyledInput ref={nicknameInput} placeholder="닉네임을 입력해주세요" />
          <StyledButton onClick={setNickname}>다음</StyledButton>
        </>
      )}
      {isLogin && nickName !== null && <StyledButton onClick={() => handleLogout()}>{nickName}</StyledButton>}
    </StyledDiv>
  );
};
