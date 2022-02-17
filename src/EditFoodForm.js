import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './contexts/FoodsContext';


function EditFoodForm({ id, name, toggleIsEditing }) {
    const dispatch = useContext(DispatchContext);
    const [value, handleChange] = useInputState(name);

    return (
        <>
            <form
                style={{ marginLeft: '1.5rem', width: '50%' }}
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch({ type: 'UPDATE-FOOD', id: id, newFood: value })
                    toggleIsEditing();
                }}>
                <TextField
                    fullWidth
                    margin='normal'
                    value={value}
                    onChange={handleChange}
                    autoFocus
                />
            </form>
        </>
    )
}

export default EditFoodForm;
