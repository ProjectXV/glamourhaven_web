import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = process.meta.env.API_BASE_URL;

export const registerUser = createAsyncThunk(
  'users/register',
  async (userData, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.post(
        `${API_BASE_URL}/create-user-account`,
        userData,
        config,
      );
      console.log(response);
      let data = await response.data;
      console.log(data);

      if (response.status !== 200) {
        return thunkAPI.rejectWithValue(data);
      } else {
        localStorage.setItem('userInfo', JSON.stringify(data));
        return data;
      }
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const loginUser = createAsyncThunk(
  'users/login',
  async (userData, thunkAPI) => {
    try {
      const config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.post(
        `${API_BASE_URL}/users/login`,
        userData,
        config,
      );
      console.log(response);
      let data = await response.data;
      console.log(data);

      if (response.status !== 200) {
        return thunkAPI.rejectWithValue(data);
      } else {
        localStorage.setItem('userInfo', JSON.stringify(data));
        return data;
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const authGoogle = createAsyncThunk(
  'users/googleauth',
  async (tokenId, thunkAPI) => {
    try {
      const config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };

      console.log(tokenId);

      const response = await axios.post(
        `${API_BASE_URL}/users/google`,
        tokenId,
        config,
      );
      console.log(response);
      let data = await response.data;
      console.log(data);

      if (response.status !== 200) {
        return thunkAPI.rejectWithValue(data);
      } else {
        localStorage.setItem('userInfo', JSON.stringify(data));
        return data;
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

const initialState = {
  userInfo: null,
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearState: state => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
    },
    logoutUser: state => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
      document.location.href = '/';
    },
  },
  extraReducers: {
    [registerUser.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.userInfo = payload;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message ? payload.message : null;
    },
    [registerUser.pending]: state => {
      state.isFetching = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.userInfo = payload;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [loginUser.pending]: state => {
      state.isFetching = true;
    },
    [authGoogle.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.userInfo = payload;
    },
    [authGoogle.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload?.message;
    },
    [authGoogle.pending]: state => {
      state.isFetching = true;
    },
  },
});

export const { clearState, logoutUser } = userSlice.actions;

export const userSelector = state => state.user;
