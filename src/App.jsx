import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

let nextId = 1;

export default function App() {

    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
    
    const [inputValue, setInput] = useState('');

    // This persists the tasks in local storage whenever they change
    useEffect(() => {
        console.log('Saving tasks to local storage:', tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = () => {
        if (!inputValue) {
            return;
        }
        setTasks([...tasks, { id: nextId++, name: inputValue }]);
        setInput('');
    };

    const handleDeleteTask = (event) => {
        setTasks(tasks.filter(task => task.id !== Number(event.target.dataset.id)));
    }

    const onCompleteToggle = (event) => {
        console.log(event.target.checked);
        setTasks(tasks.map(task => {
            if (task.id === Number(event.target.dataset.id)) {
                return { ...task, completed: !task.completed };
            }
            return task;
        }));
    }

    return (
        <>
            <h1>Task Manager</h1>
            <input type="text" value={inputValue} onChange={(event) => setInput(event.target.value)} placeholder="Enter a task" />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task) => (
                    <TaskItem key={task.id} id={task.id} name={task.name} completed={task.completed} onDelete={handleDeleteTask} onCompleteToggle={onCompleteToggle} />
                ))}
            </ul>
        </>
    );
}