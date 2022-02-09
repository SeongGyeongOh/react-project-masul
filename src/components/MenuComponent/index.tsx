import React from "react";
import { DataType } from "../../modules/data";
import { Card, Row, Col } from 'antd';

const { Meta } = Card;

type DrinkProp = {
    kinds: string[]
    data: DataType[]
    isClick: (isClick: boolean, drinkType: string) => void
}

const createCol = (type: string, isCilck: (isClick: boolean, drinkType: string) => void) => (
        <Col key={type} onClick={() => isCilck(true, type)}>
            <Card
            hoverable
            style={{ width: 150 }}
            >
                <Meta title={type}/>
            </Card>
        </Col>
    )

const MenuList = ({ kinds, data, isClick }: DrinkProp) => {

    const typeList = kinds.map(item => createCol(item, isClick))

    return (
        <Row gutter={[40, 30]}>
            {typeList}
        </Row>
    )
};


export default MenuList;