import React, { useContext } from 'react';
import Food from './Food';
import { FoodsContext } from './contexts/FoodsContext';
import {
    Paper,
    List,
    Divider
} from '@mui/material';

function FoodList() {
    const food = useContext(FoodsContext);
    if (food.length)
        return (
            <Paper>
                <List>
                    {food.map((food, index) => {
                        return <>
                            <Food key={food.id} {...food} />
                            {index < food.lenght - 1 && <Divider key={index} />}
                        </>
                    })}
                </List>
            </Paper>
        );
    return null;
}

export default FoodList;
