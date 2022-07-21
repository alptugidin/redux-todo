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

export const deleteAsyncTodo = createAsyncThunk('todos/deleteAsyncTodo', async ({ name }) => {
  const response = await axios.delete(`/todos/${name}`);
  return response.data;
});

export const setAllAsyncTodo = createAsyncThunk('todos/setAllAsyncTodo', async () => {
  const response = await axios.get('/todos/setAll');
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

    setAll: (state, action) => {
      state.value = state.value.map((item) => ({ ...item, status: action.payload }));
    },

  },

  extraReducers: {

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

    [postAsyncTodo.fulfilled]: (state, action) => {
      state.value.push(action.payload);
    },

    [updateAsyncTodo.fulfilled]: (state, action) => {
      const index = state.value.findIndex((item) => item.name === action.payload.name);
      state.value[index].status = action.payload.status;
    },

    [deleteAsyncTodo.fulfilled]: (state, action) => {
      state.value = action.payload;
    },

    [setAllAsyncTodo.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
  },

});
export const {
  removeTodo, updateTodo, setAll, changeActiveButton,
} = todoSlice.actions;
export default todoSlice.reducer;
