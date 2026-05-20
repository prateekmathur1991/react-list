import { useState } from "react";
import TaskItem from "./TaskItem";
import useLocalStorage from "./useLocalStorage";

export default function App() {

    const [tasks, setTasks] = useLocalStorage('tasks', []);
    let [id, setId] = useLocalStorage('id', 0);

    const [inputValue, setInput] = useState('');

    const handleAddTask = () => {
        if (!inputValue) {
            return;
        }
        id++;
        setTasks([...tasks, { id: id, name: inputValue }]);
        setInput('');
        setId(id);
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