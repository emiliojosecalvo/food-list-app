import React, { useContext } from 'react';
import Food from './Food';
import {
    Paper,
    List,
    Divider
} from '@mui/material';
import { FoodsContext } from './contexts/FoodsContext';

function FoodList() {
    const { food } = useContext(FoodsContext);
    if (food.length)
        return (
            <Paper>
                <List>
                    {food.map((food, index) => {
                        return <>
                            <Food {...food} key={index} />
                            {index < food.lenght - 1 && <Divider />}
                        </>
                    })}
                </List>
            </Paper>
        );
    return null;
}

export default FoodList;
