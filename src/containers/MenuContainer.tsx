import React from 'react';
import MenuList from '../components/Menu';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getDrinkListAction } from '../modules/reducers/menu';
import { RootState } from '../modules/reducers';

const MenuContainer = () => {
    const dispatch = useDispatch();
    const {data, isLoading} = useSelector((state: RootState) => {
        console.log("data sss : ", state.menu)
        return {
            data: state.menu.data,
            isLoading: state.menu.isLoading
        }
    }, (left, right) => {
        const bool = left.data ? left.data.filter( d => !right.data.includes(d)).length == 0 : true
        console.log("selector is same : ", bool);
        return bool;
    });

    console.log("menuState : ", data);

    dispatch(getDrinkListAction());
    console.log("MenuContainer");

    return (
        <>
        {data ? data : '없음'}
        {console.log("datasssss : ", data)}
        <MenuList />
        </>
    );
};


export default MenuContainer;