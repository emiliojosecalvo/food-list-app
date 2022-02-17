import React, { createContext, useReducer } from "react";
import foodReducer from '../reducer/foodReducer';
// import useFoodState from "../hooks/useFoodState";

//separate 2 diferent context for foods and dispatch
export const FoodsContext = createContext();
export const DispatchContext = createContext();

const defaultFood = [
    { id: 1, name: 'Pasta con Carne', isAvailable: true }
]

export function FoodsProvider(props) {
    // const { foods, addFood, removeFood, toggleFood, updateFood } = useFoodState();
    // const foodStuff = useFoodState();
    const [food, dispatch] = useReducer(foodReducer, defaultFood);

    return (
        <FoodsContext.Provider value={{ food }}>
            <DispatchContext.Provider value={{ dispatch }}>
                {props.children}
            </DispatchContext.Provider>
        </FoodsContext.Provider>
    )
}

