import { useCallback, useState } from "react"

export default function useArray(initial_array) {

    const [array, setArray] = useState(initial_array);
    const set = useCallback( (new_array) => {
        setArray(new_array);
    }, []);

    const push = useCallback( (element) => {
        setArray((a) => [...a, element]);
    }, []);

    const replace = useCallback( (index, new_element) => {
        setArray((a) => [
            ...a.slice(0, index),
            new_element,
            ...a.slice(index + 1, a.length)
        ]);
    }, []);

    const filter = useCallback( (callback) => {
        setArray((a) => a.filter(callback));
    }, []);

    const remove = useCallback( (index) => {
        setArray((a) => [
            ...a.slice(0, index),
            ...a.slice(index + 1, a.length)
        ]);
    }, []);

    const clear = useCallback( () => {
        setArray([]);
    }, []);

    const reset = useCallback( () => {
        setArray(initial_array);
    }, [initial_array]);

    return {
        array: array,
        set,
        push,
        replace,
        filter, 
        remove, 
        clear, 
        reset
    }

}