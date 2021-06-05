import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { UserLoginCredentials, AuthResponse } from '../../../api';
import Api from '../../../api';
import { resetCommunities } from '../Communities';

export const login = createAsyncThunk(
  'auth/login',
  async (data: UserLoginCredentials, thunkApi) => {
    try {
      const response = await Api.loginUser(data);
      //console.log('\n\nauth/login', response);
      return response;
    } catch (e) {
      console.log('auth/login', e);
      return thunkApi.rejectWithValue(e);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    const { dispatch } = thunkApi;
    dispatch(resetUser());
    dispatch(resetCommunities());
  } catch (e) {
    console.log('auth/logout', e);
    return thunkApi.rejectWithValue(e);
  }
});

interface State {
  isAuthenticated: boolean;
  user: AuthResponse;
}

const initialState: State = {
  isAuthenticated: false,
  user: {
    _id: '',
    name: '',
    message: '',
    jwt: '',
    role: '',
    image: '',
  },
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      if (payload.jwt !== '') {
        state.isAuthenticated = true;
        state.user = payload;
      }
      //console.log('\n\nIn case', state);
    });
  },
});

const { resetUser } = UserSlice.actions;

export default UserSlice;
