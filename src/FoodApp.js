import React, { useState, useEffect } from 'react';
import FoodList from './FoodList';
import FoodForm from './FoodForm';
import { v4 as uuidv4 } from 'uuid';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Paper,
    Grid
} from '@mui/material';

function FoodApp() {
    const initialFoods = JSON.parse(window.localStorage.getItem('foods')) || [];
    // const initialFoods = [
    //     { id: uuidv4(), name: 'Bolognese', isAvailable: false, isVegan: false, isVegetarian: false },
    //     { id: uuidv4(), name: 'Rissoto', isAvailable: true, isVegan: false, isVegetarian: true },
    //     { id: uuidv4(), name: 'Canneloni', isAvailable: true, isVegan: true, isVegetarian: true }
    // ];
    const [food, setFood] = useState(initialFoods);

    useEffect(() => {
        window.localStorage.setItem('foods', JSON.stringify(food));

    }, [food]);

    //Add new food to the menu
    const addFood = newFood => {
        setFood([...food, { id: uuidv4(), name: newFood, isVegan: false, isVegetarian: false, isAvailable: true }])
    }
    //Remove a food from the menu
    const removeFood = foodId => {
        //create new array without the food that matches the id
        const updatedFoods = food.filter(food => food.id !== foodId);
        //set the new array to foods
        setFood(updatedFoods);
    }
    //update availability of this food on the menu
    const toggleFood = foodId => {
        const newFoods = food.map(f =>
            f.id === foodId ? { ...f, isAvailable: !f.isAvailable } : f
        );
        setFood(newFoods);
    }
    //update an existing food
    const updateFood = (foodId, newName) => {
        const newFoods = food.map(f =>
            f.id === foodId ? { ...f, name: newName } : f
        );
        setFood(newFoods);
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
                            Food Menu
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container justifyContent='center' style={{ marginTop: '1rem' }}>
                    <Grid item xs={11} md={8} lg={4}>
                        <FoodForm addFood={addFood} />
                        <FoodList
                            food={food}
                            removeFood={removeFood}
                            toggleFood={toggleFood}
                            updateFood={updateFood}
                        />
                    </Grid>
                </Grid>
            </Paper>

        </div>
    );
}

export default FoodApp;
