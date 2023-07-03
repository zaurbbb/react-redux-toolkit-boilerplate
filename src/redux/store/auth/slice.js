import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    isFetching: false,
    error: null,
  },
  reducers: {
    adminLogout: (state) => {
      localStorage.removeItem("accessToken");
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase("auth/adminLogin/fulfilled", (state) => {
          state.isAuth = true;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.error = null;
          state.isFetching = true;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.isFetching = false;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.error = action.payload;
          state.isFetching = false;
        },
      );
  },
});

export default slice.reducer;
export const { adminLogout } = slice.actions;
