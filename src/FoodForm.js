import { Paper, TextField } from '@mui/material';
import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import { FoodsContext } from './contexts/FoodsContext';

function FoodForm() {
    const { addFood } = useContext(FoodsContext);
    const [value, handleChange, reset] = useInputState('');
    const handleSubmit = e => {
        e.preventDefault();
        addFood(value)
        reset();
    }
    return (
        <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    value={value}
                    onChange={handleChange}
                    fullWidth
                    label={'Add New Food'}
                    margin='normal'
                />
            </form>
        </Paper>
    )
}

export default FoodForm;
