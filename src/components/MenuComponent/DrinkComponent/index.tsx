import React from "react";
import { DataType } from "../../../modules/data";
import { Card, Collapse } from 'antd';

const { Meta } = Card;
const { Panel } = Collapse;

type DrinkProp = {
    data: DataType[]
}

const drink = (item: DataType) => (
        <Card
            key={item.id}
            hoverable
            style={{ width: 340 }}
            cover={<img alt="example" src={item.img}
             />}
        >
            <Collapse defaultActiveKey={['1']}>
                <Panel header={item.name} key={item.id}>
                    <p>{item.description}</p>
                    <p>Price : {item.price}, Taste : {item.taste}</p>
                    <p>Feeling : {item.feeling}, Condition : {item.condition}</p>
                    <p>알코올 도수 : {item.alc}</p>
                </Panel>
            </Collapse>
            
        </Card>
)

const DrinkDetail = ({ data }: DrinkProp) => {

    const { Meta } = Card;
    const { Panel } = Collapse;

    const itemList = data.map(item => drink(item))
    
    return (
        <>
        {itemList}
        </>
    )
};


export default DrinkDetail;