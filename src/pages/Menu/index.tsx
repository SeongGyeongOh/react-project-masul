import React from 'react';
import MenuContainer from '../../containers/MenuContainer';
import MainLayout from '../../layout/MainLayout';

const Menu = () => {
  return <MainLayout child={<MenuContainer />} />;
};

export default Menu;
