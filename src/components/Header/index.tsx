import React, { useState } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Icon from '../../const/Icons/Icon';
import styled from 'styled-components';
import { Button } from 'antd';

type HeaderProps = {
  nickname: string | null;
};

const Header = ({ nickname }: HeaderProps) => {
  return (
    <div className="header-menu flex_wrap">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'not')}>
        {nickname ? <Button>{nickname}</Button> : <Icon size={28} color="#B6B6CA" icon="login" />}
      </NavLink>
    </div>
  );
};

export default Header;
