import React from 'react';

type Props = {
  child: React.ReactNode;
};

export const MainLayout = ({ child }: Props) => {
  // const { child: ReactElement } = props
  return (
    <>
      <header></header>
      {child}
      <footer></footer>
    </>
  );
};
