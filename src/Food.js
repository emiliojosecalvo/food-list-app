import React from 'react';
import useToggleState from './hooks/useToggleState';
import EditFoodForm from './EditFoodForm';
import {
    ListItem,
    ListItemText,
    Checkbox,
    IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function Food({ food, toggleFood, removeFood, updateFood }) {
    const { id, name, isAvailable } = food;
    const [isEditing, toggleIsEditing] = useToggleState(false);
    return (
        <>
            {isEditing ? <EditFoodForm
                id={id}
                updateFood={updateFood}
                name={name}
                toggleIsEditing={toggleIsEditing}
            /> :
                <>
                    <ListItem>
                        <Checkbox checked={!isAvailable} onClick={() => toggleFood(id)} />
                        <ListItemText style={{ textDecoration: !isAvailable ? 'line-through' : 'none' }}>
                            {name}
                        </ListItemText>
                        <IconButton onClick={toggleIsEditing}>
                            <EditIcon color='primary' />
                        </IconButton>
                        <IconButton onClick={() => removeFood(id)}>
                            <DeleteIcon color='primary' />
                        </IconButton>
                    </ListItem>
                </>
            }
        </>
    )
}

export default Food;
