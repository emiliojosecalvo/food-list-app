import React from 'react';
import {
    ListItem,
    ListItemText,
    Checkbox
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function Food(props) {
    const { id, name, isAvailable } = props.food;
    return (
        <>
            <ListItem>
                <Checkbox checked={!isAvailable} />

                <ListItemText key={id} style={{ textDecoration: !isAvailable ? 'line-through' : 'none' }}>
                    {name}
                </ListItemText>
                <EditIcon color='primary' />
                <DeleteIcon color='primary' />
            </ListItem>
        </>
    )
}

export default Food;
