import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {
  child: React.ReactNode;
};

const MainLayout = ({ child }: Props) => {
  // const { child: ReactElement } = props
  return (
    <>
      <Header />
      <div className="mainpd">{child}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
