import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue = []) {

    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem(key);
        return storedTasks ? JSON.parse(storedTasks) : initialValue;
    });

    // This persists the tasks in local storage whenever they change
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(tasks));
    }, [tasks]);

    return [tasks, setTasks];
}