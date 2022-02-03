import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Paper
} from '@mui/material';


function FoodApp() {
    const initialFoods = [
        { id: 1, food: 'Bolognese', isVegan: false, isVegetarian: false },
        { id: 2, food: 'Rissoto', isVegan: false, isVegetarian: true },
        { id: 3, food: 'Canneloni', isVegan: true, isVegetarian: true }
    ];
    const [food, setFood] = useState(initialFoods);
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
                <FoodList food={food} />
            </Paper>

        </div>
    );
}

export default FoodApp;
