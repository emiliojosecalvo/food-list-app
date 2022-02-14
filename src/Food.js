import React, { useContext } from 'react';
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
import { FoodsContext } from './contexts/FoodsContext';

function Food({ id, name, isAvailable }) {
    const { toggleFood, removeFood } = useContext(FoodsContext);
    const [isEditing, toggleIsEditing] = useToggleState(false);

    return (
        <>
            {isEditing ? <EditFoodForm
                id={id}
                name={name}
                toggleIsEditing={toggleIsEditing}
            /> :
                <>
                    <ListItem style={{ height: '80px' }} >
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
