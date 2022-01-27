import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <ul className="header-menu">
      <li>
        <Link to="/alcoholcup">About</Link>
      </li>
      <li>
        <Link to="/recommend">Product</Link>
      </li>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/community">Shop</Link>
      </li>
      <li>
        <Link to="/">Q&amp;A</Link>
      </li>
    </ul>
  );
};

export default Footer;
