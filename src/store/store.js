import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../store/todosSlice';

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});