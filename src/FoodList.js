import React from 'react';
import Food from './Food';
import {
    Paper,
    List,
    Divider
} from '@mui/material';

function FoodList(props) {
    return (
        <>
            <Paper>
                <List>
                    {props.food.map(f => {
                        return <>
                            <Food food={f} />
                            <Divider />
                        </>
                    })}

                </List>
            </Paper>
        </>
    )
}

export default FoodList;
