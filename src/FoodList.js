import React from 'react';
import Food from './Food';
import {
    Paper,
    List,
    Divider
} from '@mui/material';

function FoodList({ food, removeFood, toggleFood }) {
    return (
        <>
            <Paper>
                <List>
                    {food.map(f => {
                        return <>
                            <Food
                                key={f.id}
                                food={f}
                                removeFood={removeFood}
                                toggleFood={toggleFood} />
                            <Divider />
                        </>
                    })}

                </List>
            </Paper>
        </>
    )
}

export default FoodList;
