import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      { id: 1, title: 'Learn React', description: 'Start with the basics', done: false },
      { id: 2, title: 'Build Redux app', description: 'Implement Redux in the app', done: false }
    ]
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: state.todos.length + 1,
        title: action.payload.title,
        description: action.payload.description,
        done: false
      };
      state.todos.unshift(newTodo);
    },
    toggleTodo: (state, action) => {
        console.log(state);
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.done = !todo.done;
      }
    }
  }
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;