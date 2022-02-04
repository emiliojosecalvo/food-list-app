import { useState } from 'react';

function useToggler(initialValue) {
    const [state, setState] = useState(initialValue);
    const toggle = () => {
        setState(!state);
    }
    return [state, toggle];
}

export default useToggler;
