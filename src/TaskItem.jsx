export default function TaskItem({id, name, completed, onDelete, onCompleteToggle }) {
    return (
        <div style={{display: 'flex'}}>
            <li>{name}</li> &nbsp; &nbsp; &nbsp; <input type="checkbox" onChange={onCompleteToggle} checked={completed} /> <button data-id={id} onClick={onDelete}>Delete</button>
        </div>
    );
}