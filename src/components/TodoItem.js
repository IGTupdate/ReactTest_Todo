import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../store/todosSlice';

const TodoItem = ({ todo, toggleTodo }) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  return (
    <li className="flex items-center mb-2">
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} className="mr-2" />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
      {todo.description && (
        <p className="ml-4 text-gray-600">{todo.description}</p>
      )}
    </li>
  );
};

export default connect(null, { toggleTodo })(TodoItem);