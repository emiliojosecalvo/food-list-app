import { useState, useEffect } from 'react';

function useLocalStorageState(key, defaultValue) {
    //make a piece of state, based off of value in localstorage
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue))
        }
        catch (e) {
            val = defaultValue;
        }
        return val;
    });

    //update localstorage when state changces
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);
    return [state, setState];
}

export default useLocalStorageState;
