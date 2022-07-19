import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  value: [
    { id: 'AW3AR9S96m7JNjzOf-LzR', name: 'Taste JavaScript', status: false },
    { id: 'tG5EPOx32ETF4DgoyMuEx', name: 'Code furiously', status: false },
    { id: 'ow_br2Z-C99dslVJrqBtc', name: 'Promote Mavo', status: false },
    { id: 'bQ4eGeQBzPGcTVG8srCci', name: 'Give talks', status: false },
    { id: '7uI4ZWtNvwvV9mGM3gnjp', name: 'Write tutorials', status: false },
    { id: 'BKfrLBFlP4jEViUqteVlh', name: 'Have a life!', status: false },
  ],
  activeButton: 'All',
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // addTodo: (state, action) => {
    //   const dup = state.value.some((item) => item.name === action.payload.name);
    //   if (dup === false) {
    //     state.value.push(action.payload);
    //   }
    // },

    addTodo: {
      reducer: (state, action) => {
        const dup = state.value.some((item) => item.name === action.payload.name);
        if (dup === false) {
          state.value.push(action.payload);
        }
      },
      prepare: (activity) => ({
        payload: {
          id: nanoid(),
          name: activity,
          status: false,
        },
      }),
    },

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

});
export const {
  addTodo, removeTodo, updateTodo, setAll, changeActiveButton,
} = todoSlice.actions;
export default todoSlice.reducer;
