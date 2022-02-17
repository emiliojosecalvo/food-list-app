import React, { useContext, memo } from 'react';
import useToggleState from './hooks/useToggleState';
import EditFoodForm from './EditFoodForm';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DispatchContext } from './contexts/FoodsContext';
import {
    ListItem,
    ListItemText,
    Checkbox,
    IconButton
} from '@mui/material';

function Food({ id, name, isAvailable }) {
    const dispatch = useContext(DispatchContext);
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

export default memo(Food);

//memo only checks for prop changes. if the props hasnt change the component will not be rerender
