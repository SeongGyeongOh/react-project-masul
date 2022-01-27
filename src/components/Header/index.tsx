import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <div className="Header_wrap">
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/">
        <div className="btn_login">로그인</div>
      </Link>
    </div>
  );
};

export default Header;
