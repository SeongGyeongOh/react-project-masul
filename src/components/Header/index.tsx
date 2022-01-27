import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import styled from 'styled-components';
import icon_login from '../../assets/icons/icon-login.png';

const StyledIcon = styled.img`
  width: 1.5rem;
`;

const Header = () => {
  return (
    <div className="header-menu flex_wrap">
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/login">
        <StyledIcon src={icon_login} />
      </Link>
    </div>
  );
};

export default Header;
