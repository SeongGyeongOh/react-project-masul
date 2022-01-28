import React, { useState } from 'react';
import './footer.scss';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../../const/Icons/Icon';

const FooterStyled = styled.div`
  width: 350px;
  margin: 0 auto;
`;

const StyledIcon = styled.img`
  width: 1.8rem;
`;

const Footer = () => {
  const [value, setValue] = useState('#B6B6CA');

  const colorChange = () => {
    setValue('red');
  };
  return (
    <FooterStyled>
      <ul className="footer-menu flex_wrap">
        <li>
          <NavLink to="/alcoholcup" className={({ isActive }) => (isActive ? 'active' : 'not')}>
            <Icon size={28} color={'#B6B6CA'} icon="alcholcup" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/recommend" className={({ isActive }) => (isActive ? 'active' : 'not')}>
            <Icon size={28} color={'#B6B6CA'} icon="recommend" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'not')}>
            <Icon size={28} color={'#B6B6CA'} icon="home" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/community" className={({ isActive }) => (isActive ? 'active' : 'not')}>
            <Icon size={28} color={'#B6B6CA'} icon="community" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={({ isActive }) => (isActive ? 'active' : 'not')}>
            <Icon size={28} color={'#B6B6CA'} icon="menu" />
          </NavLink>
        </li>
      </ul>
    </FooterStyled>
  );
};

export default Footer;
