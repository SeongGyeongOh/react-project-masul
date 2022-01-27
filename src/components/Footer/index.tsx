import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import icon_alcholcup from '../../assets/icons/icon-alcholcup.png';
import icon_community from '../../assets/icons/icon-community.png';
import icon_home from '../../assets/icons/icon-home.png';
import icon_recommend from '../../assets/icons/icon-recommend.png';
import icon_search from '../../assets/icons/icon-search.png';

const StyledIcon = styled.img`
  width: 1.8rem;
`;

const Footer = () => {
  return (
    <ul className="footer-menu flex_wrap">
      <li>
        <Link to="/alcoholcup">
          <StyledIcon src={icon_alcholcup} alt="로고" />
        </Link>
      </li>
      <li>
        <Link to="/recommend">
          <StyledIcon src={icon_recommend} alt="로고" />
        </Link>
      </li>
      <li>
        <Link to="/">
          <StyledIcon src={icon_home} alt="로고" />
        </Link>
      </li>
      <li>
        <Link to="/community">
          <StyledIcon src={icon_community} alt="로고" />
        </Link>
      </li>
      <li>
        <Link to="/">
          <StyledIcon src={icon_search} alt="로고" />
        </Link>
      </li>
    </ul>
  );
};

export default Footer;
