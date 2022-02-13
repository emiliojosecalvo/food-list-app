import React from 'react';
import Food from './Food';
import {
    Paper,
    List,
    Divider
} from '@mui/material';

function FoodList({ food, removeFood, toggleFood, updateFood }) {
    if (food.length)
        return (
            <Paper>
                <List>
                    {food.map((f, i) => {
                        return <>
                            <Food
                                food={f}
                                removeFood={removeFood}
                                toggleFood={toggleFood}
                                updateFood={updateFood}
                                key={f.id}
                            />
                            {i < food.lenght - 1 && <Divider />}
                        </>
                    })}
                </List>
            </Paper>
        );
    return null;
}

export default FoodList;
