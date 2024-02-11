import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  name: "",
  username: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",

  reducers: {
    addUser: (state = initalState, action) => {
      const { name, username, email } = action.payload;
      state.name = name;
      state.username = username;
      state.email = email;
    },
    changeEmail: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

export const { addUser, changeEmail } = userSlice.actions;

export const userReducer = userSlice.reducer;
