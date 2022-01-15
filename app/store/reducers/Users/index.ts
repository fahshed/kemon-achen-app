import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
  UserLoginCredentials,
  AuthResponse,
  RegularUserCredentials,
  ProfessionalUserCredentials,
} from '../../../api';
import Api from '../../../api';
import { resetCommunities } from '../Communities';
import { resetPost } from '../Posts';

export const signupRegular = createAsyncThunk(
  'auth/signupRegular',
  async (data: RegularUserCredentials, thunkApi) => {
    try {
      const response = await Api.signupRegularUser(data);
      // console.log('\n\nauth/signup', response);
      return response;
    } catch (e) {
      console.log('auth/signupRegular', e);
      return thunkApi.rejectWithValue(e);
    }
  },
);

export const signupProfessional = createAsyncThunk(
  'auth/signupProfessional',
  async (data: ProfessionalUserCredentials, thunkApi) => {
    try {
      const response = await Api.signupProfessionalUser(data);
      // console.log('\n\nauth/signupProfessional', response);
      return response;
    } catch (e) {
      console.log('auth/signupProfessional', e);
      return thunkApi.rejectWithValue(e);
    }
  },
);

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
    dispatch(resetPost());
    dispatch(resetCommunities());
    await Api.logOutUser();
    dispatch(resetUser());
  } catch (e) {
    console.log('auth/logout', e);
    return thunkApi.rejectWithValue(e);
  }
});

export const fetchUserCommentsById = createAsyncThunk(
  'user/comments',
  async (userId: string, thunkApi) => {
    try {
      const response = await Api.getCommentsByUserId(userId);
      //console.log('\n\nuser/comments', response);
      return response;
    } catch (e) {
      console.log('user/comments', e);
      return thunkApi.rejectWithValue(e);
    }
  },
);

interface State {
  isAuthenticated: boolean;
  isCommunityListEmpty: boolean;
  user: AuthResponse;
  userComments: any;
}

const initialState: State = {
  isAuthenticated: false,
  isCommunityListEmpty: true,
  user: {
    _id: '',
    name: '',
    message: '',
    jwt: '',
    role: '',
    image: '',
  },
  userComments: [],
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: () => initialState,
    setJoinedAtLeastOne: (state) => {
      state.isCommunityListEmpty = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signupRegular.fulfilled, (state, { payload }) => {
      if (payload.jwt !== '') {
        state.isAuthenticated = true;
        state.user = payload;
      }
    });

    builder.addCase(signupProfessional.fulfilled, (state, { payload }) => {
      if (payload.jwt !== '') {
        state.isAuthenticated = true;
        state.user = payload;
      }
    });

    builder.addCase(login.fulfilled, (state, { payload }) => {
      if (payload.jwt !== '') {
        state.isAuthenticated = true;
        state.user = payload;
      }
      //console.log('\n\nIn case', state);
    });

    builder.addCase(fetchUserCommentsById.fulfilled, (state, { payload }) => {
      state.userComments = payload;
    });
  },
});

export const { resetUser, setJoinedAtLeastOne } = UserSlice.actions;

export default UserSlice;
