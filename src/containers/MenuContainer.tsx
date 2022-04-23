import React, { useEffect, useState } from 'react';
import MenuList from '../components/MenuComponent';
import DrinkDetail from '../components/MenuComponent/DrinkComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getDrinkListAction } from '../modules/reducers/menu';
import { RootState } from '../modules/reducers';
import { DataType } from '../modules/data';

function typeDivider(data: DataType[]): string[] {
  let types: string[] = [];

  data?.forEach((element) => {
    if (!types.includes(element.type)) {
      types.push(element.type);
    }
  });

  return types;
}

function drinksFromType(type: string, data: DataType[]) {
  return data.filter((item) => item.type === type);
}

const MenuContainer = () => {
  const dispatch = useDispatch();
  const [isClick, setIsClick] = useState(false);
  const [drinkType, setDrinkType] = useState('위스키');
  const { data, isLoading } = useSelector(
    (state: RootState) => {
      return {
        data: state.menu.data,
        isLoading: state.menu.isLoading,
      };
    },
    (left, right) => {
      const bool = left.data ? left.data.filter((d) => !right.data.includes(d)).length == 0 : true;
      return bool;
    },
  );

  const handleClick = (isCilck: boolean, drinkType: string) => {
    setIsClick(isCilck);
    setDrinkType(drinkType);
  };

  useEffect(() => {
    dispatch(getDrinkListAction());
  }, [dispatch]);

  const kinds = typeDivider(data);
  const drinks = drinksFromType(drinkType, data);

  return <>{isClick ? <DrinkDetail data={drinks} /> : <MenuList kinds={kinds} data={data} isClick={handleClick} />}</>;
};

export default MenuContainer;
