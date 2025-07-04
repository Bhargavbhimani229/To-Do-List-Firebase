import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    setTodos: (state, action) => action.payload,
    addTodo: (state, action) => { state.push(action.payload); },
    deleteTodo: (state, action) => state.filter(todo => todo.id !== action.payload),
    toggleTodo: (state, action) => {
      const item = state.find(t => t.id === action.payload);
      if (item) item.completed = !item.completed;
    },
  },
});

export const { setTodos, addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
