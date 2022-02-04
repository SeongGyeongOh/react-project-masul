import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {
  child: React.ReactNode;
};

const StyledLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainLayout = ({ child }: Props) => {
  return (
    <StyledLayout>
      <Header />
      <div className="mainpd">{child}</div>
      <Footer />
    </StyledLayout>
  );
};

export default MainLayout;
