import { createAsyncThunk } from "@reduxjs/toolkit";

import { API } from "../../index";
import { errorHandler } from "../../helpers/errorHandler";

export const getAllUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/users/getAll");
      return response.data;
    } catch (error) {
      return errorHandler(error, rejectWithValue);
    }
  },
);

export const getUserById = createAsyncThunk(
  "users/getUserById",
  async ({ userId }, { rejectWithValue }) => {
    try {
      const response = await API.get(`/users/get/${userId}`);
      return response.data;
    } catch (error) {
      return errorHandler(error, rejectWithValue);
    }
  },
);

export const patchUser = createAsyncThunk(
  "users/patchUser",
  async ({ userId, data }, { dispatch, rejectWithValue }) => {
    // data => { [key]: value }
    try {
      const response = await API.patch(`/users/update/${userId}`, data);
      dispatch(getUserById({ userId }));
      return response.data;
    } catch (error) {
      return errorHandler(error, rejectWithValue);
    }
  },
);

export const getBlockedUser = createAsyncThunk(
  "users/getBlockedUser",
  async ({ userId }, { rejectWithValue }) => {
    try {
      const response = await API.get(`/users/getBlocked/${userId}`);
      return {
        isBlocked: true,
        data: response.data,
      };
    } catch (error) {
      const { status, data } = error.response;
      if (status === 404 && data.message === "User not blocked") {
        return {
          isBlocked: false,
          data,
        };
      }
      return errorHandler(error, rejectWithValue);
    }
  },
);

export const blockUser = createAsyncThunk(
  "users/blockUser",
  async ({ userId, data }, { dispatch, rejectWithValue }) => {
    // data => { reason, unblock_date }
    try {
      const response = await API.post(`/users/block/${userId}`, data);
      dispatch(getBlockedUser({ userId }));
      return response.data;
    } catch (error) {
      return errorHandler(error, rejectWithValue);
    }
  },
);

export const unblockUser = createAsyncThunk(
  "users/unblockUser",
  async ({ userId }, { dispatch, rejectWithValue }) => {
    try {
      const response = await API.get(`/users/unblock/${userId}`);
      dispatch(getBlockedUser({ userId }));
      return response.data;
    } catch (error) {
      return errorHandler(error, rejectWithValue);
    }
  },
);

export const nullifyUser = createAsyncThunk(
  "users/nullifyUser",
  async ({ userId }, { dispatch, rejectWithValue }) => {
    try {
      const response = await API.delete(`/users/nullify/${userId}`);
      dispatch(getUserById({ userId }));
      return response.data;
    } catch (error) {
      return errorHandler(error, rejectWithValue);
    }
  },
);
