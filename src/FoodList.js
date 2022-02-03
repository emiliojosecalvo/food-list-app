import React from 'react';

function FoodList(props) {
    return (
        <>
            <ul>
                {props.food.map(f => {
                    return <li key={f.id}>{f.food}</li>
                })}
            </ul>
        </>
    )
}

export default FoodList;
