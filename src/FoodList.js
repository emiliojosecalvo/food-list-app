import React from 'react';
import {
    Paper,
    List,
    ListItem,
    Divider,
    ListItemText
} from '@mui/material';
import FoodForm from './FoodForm';

function FoodList(props) {
    return (
        <>
            <Paper>
                <FoodForm addFood={props.addFood} />
                <List>
                    {props.food.map(f => {
                        return <>
                            <ListItem key={f.id}>
                                <ListItemText>{f.name}</ListItemText>
                            </ListItem>
                            <Divider />
                        </>
                    })}
                </List>
            </Paper>
        </>
    )
}

export default FoodList;
