import React from 'react';
import {
    ListItem,
    ListItemText
} from '@mui/material';

function Food(props) {
    const { food } = props;
    return (
        <>
            <ListItem>
                <ListItemText key={food.id}>
                    {food.name}
                </ListItemText>
            </ListItem>
        </>
    )
}

export default Food;
