import { createSlice } from "@reduxjs/toolkit";
import {
  getAllUsers,
  getBlockedUser,
  getUserById,
} from "./thunks";

const slice = createSlice({
  name: "users",
  initialState: {
    users: [],
    user: {
      data: {},
      blocked: {
        isBlocked: null,
        data: [],
      },
      referrals: [],
    },
    tablePageSize: 10,
    sorterOptions: {
      field: "",
      order: "",
    },
    isFetching: false,
    error: null,
  },
  reducers: {
    setTablePageSize: (state, action) => {
      state.tablePageSize = action.payload;
    },
    setSorterOptions: (state, action) => {
      state.sorterOptions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.user.data = action.payload;
      })
      .addCase(getBlockedUser.fulfilled, (state, action) => {
        state.user.blocked = action.payload;
      })
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
export const {
  setTablePageSize,
  setSorterOptions,
} = slice.actions;
