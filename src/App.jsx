// This is a React component that serves as the main entry point for the Task Manager application. 
// It currently renders a simple heading.

import { useState } from "react";
import TaskItem from "./TaskItem";

const tasksArray = [
    { id: 1, name: 'Buy Groceries' },
    { id: 2, name: 'Buy Fruits' },
    { id: 3, name: 'Charge Phone' },
    { id: 4, name: 'Complete all tasks' }
];

let nextId = 0;

export default function App() {

    const [tasks, setTasks] = useState(tasksArray);
    const [inputValue, setInput] = useState('');

    const handleAddTask = () => {
        if (!inputValue) {
            return;
        }
        setTasks([...tasks, {id : nextId++, name : inputValue}]);
        setInput('');
    };

    return (
        <>
            <h1>Task Manager</h1>
            <input type="text" value={inputValue} onChange={(event) => setInput(event.target.value)} placeholder="Enter a task" />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <TaskItem key={index} name={task.name} />
                ))}
            </ul>
        </>
    );
}