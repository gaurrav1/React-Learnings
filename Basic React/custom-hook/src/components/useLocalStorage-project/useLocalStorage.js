import { useEffect, useState } from "react"

export default function useLocalStorage(key, default_Value) {
    const [value, setValue] = useState(() => {
        const localValue = localStorage.getItem(key);
        if (localValue == null) {
            if (typeof default_Value === "function") {
                return default_Value();
            } else {
                return default_Value;
            }
            
        } else {
            return JSON.parse(localValue);
        }
    });

    useEffect( () => {

        if (value === undefined) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(value))
        }
    }, [value, key])

    return [value, setValue]
}