import { v4 as uuidv4 } from 'uuid';

export default function foodReducer(state, action) {
    switch (action.type) {
        //ADD {type: 'ADD', newFood: 'Any Food'}
        case 'ADD-FOOD':
            return [...state, { id: uuidv4(), name: action.newFood, isAvailable: true }];
        //REMOVE {type: 'REMOVE, id: '12'}
        case 'REMOVE-FOOD':
            return state.filter(food => food.id !== action.id);
        //TOGGLE {type: 'TOGGLE, id: '12'}
        case 'TOGGLE-FOOD':
            return state.map(food => food.id === action.id ? { ...food, isAvailable: !food.isAvailable } : food);
        case 'UPDATE-FOOD':
            //TOGGLE {type: 'TOGGLE, id: '12', newFood: 'Pasta'}
            return state.map(food => food.id === action.id ? { ...food, name: action.newFood } : food);
        default:
            return state;
    }
}


//Add new food to the menu
// addFood: newFood => { setFood([...food, { id: uuidv4(), name: newFood, isAvailable: true }]) },
//Remove a food from the menu
// removeFood: foodId => {
//create new array without the food that matches the id
// const updatedFoods = food.filter(food => food.id !== foodId);
//set the new array to foods
// setFood(updatedFoods);
// },
//update availability of this food on the menu
// toggleFood: foodId => {
//     const newFoods = food.map(f =>
//         f.id === foodId ? { ...f, isAvailable: !f.isAvailable } : f
//     );
//     setFood(newFoods);
// },
//update an existing food
// updateFood: (foodId, newName) => {
//     const newFoods = food.map(f =>
//         f.id === foodId ? { ...f, name: newName } : f
//     );
//     setFood(newFoods);