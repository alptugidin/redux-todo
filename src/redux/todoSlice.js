import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    { name: 'Taste JavaScript', status: false },
    { name: 'Code furiously', status: false },
    { name: 'Promote Mavo', status: false },
    { name: 'Give talks', status: false },
    { name: 'Write tutorials', status: false },
    { name: 'Have a life!', status: false },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
