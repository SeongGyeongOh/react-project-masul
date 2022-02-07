import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {
  child: React.ReactNode;
};

const StyledLayout = styled.div`
  height: 90vh;
  display: flex;
  overflow: auto;
  flex-direction: column;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
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
