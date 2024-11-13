import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './store/slice/todoSlice';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import './TodoApp.css';

export const TodoApp = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleNewTodo = (newTodo) => {
    dispatch(addTodo(newTodo)); // Despacha la acción para agregar un nuevo TODO
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const countTodos = todos.length;
  const countPendingTodos = todos.filter((todo) => !todo.done).length;

  return (
    <>
      <h1>
        Todos: {countTodos}, <small>Pendientes: {countPendingTodos}</small>
      </h1>
      <hr />
      <div className="row">
        <TodoList todos={todos} handleDelete={handleDeleteTodo} handleToggle={handleToggleTodo} />
        <TodoAdd onNewTodo={handleNewTodo} />
      </div>
    </>
  );
};

export default TodoApp;


