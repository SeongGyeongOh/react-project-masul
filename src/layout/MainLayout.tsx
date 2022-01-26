import React from 'react';

type Props = {
  child: React.ReactNode
}

const MainLayout = ({child}: Props) => {
  // const { child: ReactElement } = props
  return (
    <>
    <header>
    </header>
      {
        child
      }
      <footer>
      </footer>
    </>
  );
};

export default MainLayout;