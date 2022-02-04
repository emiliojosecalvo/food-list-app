import React, { useState } from 'react';
import FoodList from './FoodList';
import FoodForm from './FoodForm';

import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Paper,
    Grid
} from '@mui/material';

function FoodApp() {
    const initialFoods = [
        { id: 1, name: 'Bolognese', isVegan: false, isVegetarian: false },
        { id: 2, name: 'Rissoto', isVegan: false, isVegetarian: true },
        { id: 3, name: 'Canneloni', isVegan: true, isVegetarian: true }
    ];
    const [food, setFood] = useState(initialFoods);
    const addFood = newFood => {
        setFood([...food, { id: 5, name: newFood, isVegan: false, isVegetarian: false }])
    }
    return (
        <div>
            <Paper style={{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: '#bbe4ff',
            }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Food App
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container justifyContent='center' style={{ marginTop: '1rem' }}>
                    <Grid item xs={11} md={8} lg={4}>
                        <FoodForm addFood={addFood} />
                        <FoodList food={food} />
                    </Grid>
                </Grid>
            </Paper>

        </div>
    );
}

export default FoodApp;
