import React, { useState } from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Icon from '../../const/Icons/Icon';

const Header = () => {
  return (
    <div className="header-menu flex_wrap">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'not')}>
        <Icon size={28} color="#B6B6CA" icon="login" />
      </NavLink>
    </div>
  );
};

export default Header;
