import React from 'react';
import {
    ListItem,
    ListItemText,
    Checkbox,
    IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function Food({ food, toggleFood, removeFood }) {
    const { id, name, isAvailable } = food;
    return (
        <>
            <ListItem>
                <Checkbox checked={!isAvailable} onClick={() => toggleFood(id)} />
                <ListItemText style={{ textDecoration: !isAvailable ? 'line-through' : 'none' }}>
                    {name}
                </ListItemText>
                <IconButton >
                    <EditIcon color='primary' />
                </IconButton>
                <IconButton onClick={() => removeFood(id)}>
                    <DeleteIcon color='primary' />
                </IconButton>
            </ListItem>
        </>
    )
}

export default Food;
