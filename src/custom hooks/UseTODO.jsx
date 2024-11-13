import { useReducer, useCallback } from 'react';
import { TodoReducer } from '../components/TodoReducer';

export const useTODO = (initialState = []) => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

  const handleNewTodo = useCallback((newTodo) => {
    dispatchTodo({ type: 'add', payload: newTodo });
  }, []);

  const handleDeleteTodo = useCallback((id) => {
    dispatchTodo({ type: 'delete', payload: id });
  }, []);

  const handleToggleTodo = useCallback((id) => {
    dispatchTodo({ type: 'toggle', payload: id });
  }, []);

  const countTodos = todos.length;
  const countPendingTodos = todos.filter(todo => !todo.done).length;

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    countTodos,
    countPendingTodos,
  };
};

