import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAsyncTodo = createAsyncThunk(
  'todos/getAsyncTodo',
  async () => {
    const response = await axios.get('/todos');
    return response.data;
  },
);

export const postAsyncTodo = createAsyncThunk(
  'todos/postAsyncTodo',
  async ({ value }) => {
    const response = await axios.post('/todos', { todo: value });
    return response.data;
  },
);

export const updateAsyncTodo = createAsyncThunk('todos/updateAsyncTodo', async ({ name }) => {
  const response = await axios.patch(`/todos/${name}`);
  return response.data;
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState:
      {
        value: [],
        isLoading: false,
        error: null,
        activeButton: 'All',
      },
  reducers: {

    // addTodo: {
    //   reducer: (state, action) => {
    //     const dup = state.value.some((item) => item.name === action.payload.name);
    //     if (dup === false) {
    //       state.value.push(action.payload);
    //     }
    //   },
    //   prepare: (activity) => ({
    //     payload: {
    //       id: nanoid(),
    //       name: activity,
    //       status: false,
    //     },
    //   }),
    // },

    removeTodo: (state, action) => {
      state.value = state.value.filter((item) => item.name !== action.payload);
    },

    updateTodo: (state, action) => {
      const found = state.value.find((item) => item.name === action.payload);
      found.status = !found.status;
    },

    setAll: (state, action) => {
      state.value = state.value.map((item) => ({ ...item, status: action.payload }));
    },

    changeActiveButton: (state, action) => {
      state.activeButton = action.payload;
    },

  },

  extraReducers: {
    // get
    [getAsyncTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [getAsyncTodo.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
    },
    [getAsyncTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },

    // post
    [postAsyncTodo.fulfilled]: (state, action) => {
      state.value.push(action.payload);
    },

    [updateAsyncTodo.fulfilled]: (state, action) => {
      const index = state.value.findIndex((item) => item.name === action.payload.name);
      state.value[index].status = action.payload.status;
    },
  },

});
export const {
  removeTodo, updateTodo, setAll, changeActiveButton,
} = todoSlice.actions;
export default todoSlice.reducer;
