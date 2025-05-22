import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addUsers: function (state, action) {
      const id = state.data.length + 1;
      state.data.push({
        id,
        ...action.payload,
      });
    },
    removeData: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    editData: (state, action) => {
      const index = state.data.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = {
          ...state.data[index],
          ...action.payload,
        };
      }
    },
  },
});

export const { addUsers } = todos.actions;
export const { removeData } = todos.actions;
export const { editData } = todos.actions;
export default todos.reducer;
