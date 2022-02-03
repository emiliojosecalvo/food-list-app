import { Paper, TextField } from '@mui/material';
import React from 'react';
import useInputState from './hooks/useInputState';

function FoodForm(props) {
    const [value, handleChange, reset] = useInputState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.addFood(value)
        reset();
    }
    return (
        <Paper>
            <form onSubmit={handleSubmit}>
                <TextField value={value} onChange={handleChange} />
            </form>
        </Paper >
    )
}

export default FoodForm;