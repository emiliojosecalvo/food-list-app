import React from 'react';
import { TextField } from '@mui/material';
import useInputState from './hooks/useInputState';

function EditFoodForm({ updateFood, id, name, toggleIsEditing }) {
    const [value, handleChange] = useInputState(name);
    return (
        <>
            <form
                style={{ marginLeft: '1.5rem', width: '50%' }}
                onSubmit={(e) => {
                    e.preventDefault();
                    updateFood(id, value);
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
