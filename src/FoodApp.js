import React from 'react';
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
import { FoodsProvider } from './contexts/FoodsContext';

function FoodApp() {
    // const initialFoods = JSON.parse(window.localStorage.getItem('foods')) || [];

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
                        <FoodsProvider>
                            <FoodForm />
                            <FoodList />
                        </FoodsProvider>
                    </Grid>
                </Grid>
            </Paper>

        </div>
    );
}

export default FoodApp;
