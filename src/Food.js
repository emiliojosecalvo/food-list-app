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
    const { dispatch } = useContext(FoodsContext);
    const [isEditing, toggleIsEditing] = useToggleState(false);

    return (
        <>
            {isEditing ? <EditFoodForm
                id={id}
                name={name}
                toggleIsEditing={toggleIsEditing}
            /> :
                <>
                    <ListItem key={id} style={{ height: '80px' }} >
                        <Checkbox checked={!isAvailable} onClick={() => dispatch({ type: 'TOGGLE-FOOD', id: id })} />
                        <ListItemText style={{ textDecoration: !isAvailable ? 'line-through' : 'none' }}>
                            {name}
                        </ListItemText>
                        <IconButton onClick={toggleIsEditing}>
                            <EditIcon color='primary' />
                        </IconButton>
                        <IconButton onClick={() => dispatch({ type: 'REMOVE-FOOD', id: id })}>
                            <DeleteIcon color='primary' />
                        </IconButton>
                    </ListItem>
                </>
            }
        </>
    )
}

export default Food;
