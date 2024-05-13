import { createSlice } from '@reduxjs/toolkit';
import mockData from '../data/mockData';

const todosSlice = createSlice({
  name: 'todos',
  initialState: mockData,
  reducers: {
    addTodo: (state, action) => {
        const { title, description } = action.payload;
      const newTodo = {
        id: Date.now(),
        title,
        description,
        completed: false,
      };
      state.unshift(newTodo);
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        state.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
      }
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;