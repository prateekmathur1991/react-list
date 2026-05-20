import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        if (!storedValue) {
            return initialValue;
        }
        if (key === 'tasks') {
            return JSON.parse(storedValue);
        }
        return storedValue;
    });

    // This persists the value in local storage whenever it changes
    useEffect(() => {
        localStorage.setItem(key, key === 'tasks' ? JSON.stringify(value) : value);
    }, [value, key]);

    return [value, setValue];
}