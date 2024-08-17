import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, setToken, swaggerApi } from "../../config/swaggerApi";

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await swaggerApi.post("users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await swaggerApi.post("/users/login", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk("logout", async (_, thunkAPI) => {
  try {
    await swaggerApi.post("/users/logout");
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getMeThunk = createAsyncThunk("getMe", async (_, thunkAPI) => {
  const savedToken = thunkAPI.getState().auth.token;

  if (savedToken === null) {
    return thunkAPI.rejectWithValue("Token is not exist!");
  }

  try {
    setToken(savedToken);
    const { data } = await swaggerApi.get("/users/current");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
