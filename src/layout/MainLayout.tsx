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
      {child}
      <Footer />
    </>
  );
};

export default MainLayout;
