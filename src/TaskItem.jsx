import styles from './TaskItem.module.css';

export default function TaskItem({id, name, completed, onDelete, onCompleteToggle }) {
    return (
        <div className={styles.flexContainer}>
            <li className={completed ? styles.strike : ''}>{name}</li> &nbsp; &nbsp; &nbsp; 
            <input type="checkbox" data-id={id} value={completed} onChange={onCompleteToggle} checked={completed} /> 
            <button data-id={id} onClick={onDelete}>Delete</button>
        </div>
    );
}