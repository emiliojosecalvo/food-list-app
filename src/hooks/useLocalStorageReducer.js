import { useReducer, useEffect } from 'react';

function useLocalStorageReducer(key, defaultValue, reducer) {
    const [state, dispatch] = useReducer(reducer, defaultValue, () => {
        //Check in local storage if there is any key store
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue))
        }
        catch (e) {
            val = defaultValue;
        }
        return val;
    })
    //update localstorage when state changces
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state]);
    return [state, dispatch];
}

export { useLocalStorageReducer };
