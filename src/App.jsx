// This is a React component that serves as the main entry point for the Task Manager application. 
// It currently renders a simple heading.

import { useState } from "react";
import TaskItem from "./TaskItem";

const tasksArray = [
    {id : 1, name: 'Buy Groceries'}, 
    {id : 2, name : 'Buy Fruits'}, 
    {id : 3, name : 'Charge Phone'}, 
    {id : 4, name : 'Complete all tasks'}
];


export default function App() {
    
    const [tasks, setTasks] = useState(tasksArray);
    const [input, setInput] = useState('');

    return (
        <>
            <h1>Task Manager</h1>
            <input type="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Enter a task" />
            <button>Add Task</button>
            <ul>
                {tasksArray.map((task) => (
                    <TaskItem key={task.id} name={task.name} />
                ))}
            </ul>
        </>
    );
}