import React, { createContext } from "react";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";
import foodReducer from '../reducer/foodReducer';

//separate 2 diferent context for foods and dispatch
export const FoodsContext = createContext();
export const DispatchContext = createContext();

const defaultFood = [
    { id: 1, name: 'Pasta con Carne', isAvailable: true }
]

export function FoodsProvider(props) {
    const [food, dispatch] = useLocalStorageReducer('food', defaultFood, foodReducer);
    // const [food, dispatch] = useReducer(foodReducer, defaultFood);
    return (
        <FoodsContext.Provider value={food}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </FoodsContext.Provider>
    )
}

