import React from 'react';
import Food from './Food';
import {
    Paper,
    List,
    Divider
} from '@mui/material';

function FoodList({ food, removeFood, toggleFood, updateFood }) {
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
                                toggleFood={toggleFood}
                                updateFood={updateFood}
                            />
                            <Divider />
                        </>
                    })}

                </List>
            </Paper>
        </>
    )
}

export default FoodList;
