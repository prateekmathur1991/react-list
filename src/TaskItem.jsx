export default function TaskItem({id, name, onDelete }) {
    return (
        <div style={{display: 'flex'}}>
            <li>{name}</li> &nbsp; &nbsp; &nbsp; <button data-id={id} onClick={onDelete}>Delete</button>
        </div>
    );
}