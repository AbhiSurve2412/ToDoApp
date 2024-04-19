import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: []
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
        completed: false 
      });
    },
    deleteToDo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleToDo: (state, action) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state.todos[index].completed = !state.todos[index].completed;
      }
    }
  },
});

export const { addToDo, deleteToDo, toggleToDo } = todoSlice.actions;
export default todoSlice.reducer;
