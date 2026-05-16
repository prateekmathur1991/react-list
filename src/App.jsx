// This is a React component that serves as the main entry point for the Task Manager application. 
// It currently renders a simple heading.

export default function App() {
    return (
        <>
            <h1>Task Manager</h1>
            <input type="text" placeholder="Enter a task" />
            <button>Add Task</button>
            <ul>
                <li>Some Random Task</li>
                <li>Some Random Task</li>
                <li>Some Random Task</li>
                <li>Some Random Task</li>
                <li>Some Random Task</li>
            </ul>
        </>
    );
}