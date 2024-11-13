const TodoItem = ({ todo, handleDelete, handleToggle }) => {
    return (
      <li className="list-group-item d-flex justify-content-between">
        <span
          className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
          onClick={() => handleToggle(todo.id)}
          style={{ cursor: 'pointer' }}
        >
          {todo.description}
        </span>
        <button className="delete-button" onClick={() => handleDelete(todo.id)}>
          Borrar
        </button>
      </li>
    );
  };
  
  export default TodoItem;
  
  
  
  