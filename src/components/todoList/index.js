import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  const todoItems = todos.map(todo => (
    <li key={todo.id}>
      <span className="todo-text" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
      <button
        type="button"
        className="todo-delete"
        onClick={() => deleteTodo(todo.id)}
      >delete
      </button>
      <input
        type="radio"
        onClick={() => toggleTodo(todo.id)}
        className="todo-toggle"
      >
      </input>
    </li>
  ));

  return (
    <ul>
      {todoItems}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    },
  )).isRequired,
  deleteTodo: PropTypes.func,
  toggleTodo: PropTypes.func
};

export default TodoList;
