import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <div className="header-menu flex_wrap">
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
