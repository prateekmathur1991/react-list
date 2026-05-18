// This is a React component that serves as the main entry point for the Task Manager application. 
// It currently renders a simple heading.

import { useState } from "react";
import TaskItem from "./TaskItem";

let nextId = 1;

export default function App() {

    const [tasks, setTasks] = useState([
        { id: nextId++, name: 'Buy Groceries', completed : false },
        { id: nextId++, name: 'Buy Fruits', completed : false },
        { id: nextId++, name: 'Charge Phone', completed : false },
        { id: nextId++, name: 'Complete all tasks', completed : false }
    ]);
    
    const [inputValue, setInput] = useState('');

    const handleAddTask = () => {
        if (!inputValue) {
            return;
        }
        setTasks([...tasks, { id: nextId++, name: inputValue }]);
        setInput('');
    };

    const handleDeleteTask = (event) => {
        setTasks(tasks.filter(task => task.id != Number(event.target.dataset.id)));
    }

    const onCompleteToggle = (event) => {
        
    }

    return (
        <>
            <h1>Task Manager</h1>
            <input type="text" value={inputValue} onChange={(event) => setInput(event.target.value)} placeholder="Enter a task" />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task) => (
                    <TaskItem key={task.id} id={task.id} name={task.name} onDelete={handleDeleteTask} onCompleteToggle={onCompleteToggle} />
                ))}
            </ul>
        </>
    );
}