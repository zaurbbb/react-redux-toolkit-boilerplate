import { createAsyncThunk } from "@reduxjs/toolkit";

import { API } from "../../index";
import { errorHandler } from "../../helpers/errorHandler";

export const adminLogin = createAsyncThunk(
  "auth/adminLogin",
  async (payload, { rejectWithValue }) => {
    // payload => { username, password }
    try {
      const response = await API.post("/auth/login", payload);
      localStorage.setItem("accessToken", response.data.access_token);
    } catch (error) {
      return errorHandler(error, rejectWithValue);
    }
  },
);

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await API.get("/users/get/1");
    } catch (error) {
      return errorHandler(error, rejectWithValue, dispatch);
    }
  },
);
