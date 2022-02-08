import React, { useEffect } from 'react';
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
    console.log("MenuContainer");

    useEffect(() => {
        dispatch(getDrinkListAction());
        {console.log("datasssss : ", data)}
    }, []);

    return (
        <>
        <div>{data.length}</div>
        <MenuList />
        </>
    );
};


export default MenuContainer;