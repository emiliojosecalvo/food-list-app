import useLocalStorageState from './useLocalStorageState';
import { v4 as uuidv4 } from 'uuid';

// const initialFoods = JSON.parse(window.localStorage.getItem('foods')) || [];


export default initialFoods => {
    const [food, setFood] = useLocalStorageState("foods", initialFoods);
    return {
        food,
        //Add new food to the menu
        addFood: newFood => { setFood([...food, { id: uuidv4(), name: newFood, isAvailable: true }]) },
        //Remove a food from the menu
        removeFood: foodId => {
            //create new array without the food that matches the id
            const updatedFoods = food.filter(food => food.id !== foodId);
            //set the new array to foods
            setFood(updatedFoods);
        },
        //update availability of this food on the menu
        toggleFood: foodId => {
            const newFoods = food.map(f =>
                f.id === foodId ? { ...f, isAvailable: !f.isAvailable } : f
            );
            setFood(newFoods);
        },
        //update an existing food
        updateFood: (foodId, newName) => {
            const newFoods = food.map(f =>
                f.id === foodId ? { ...f, name: newName } : f
            );
            setFood(newFoods);
        }
    }
}