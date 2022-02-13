import React, { createContext } from "react";
import useFoodState from "../hooks/useFoodState";

export const FoodsContext = createContext();

export function FoodsProvider(props) {
    // const { foods, addFood, removeFood, toggleFood, updateFood } = useFoodState();
    const foodStuff = useFoodState();

    return (
        <FoodsContext.Provider value={foodStuff}>
            {props.children}
        </FoodsContext.Provider>
    )
}

