import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './stockSlice/todoSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});