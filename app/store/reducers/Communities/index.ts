import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import Api from '../../../api';

export const fetchCommunities = createAsyncThunk(
  'communities/fetchCommunities',
  async (_, thunkApi) => {
    try {
      const response = await Api.getCommunities();
      return response;
    } catch (e) {
      console.log('communities/fetchCommunities', e);
      return thunkApi.rejectWithValue(e);
    }
  },
);

const initialState = {
  communities: [],
};

const CommunitySlice = createSlice({
  name: 'communities',
  initialState,
  reducers: {
    resetCommunities: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCommunities.fulfilled, (state, { payload }) => {
      state.communities = payload;
    });
  },
});

export const { resetCommunities } = CommunitySlice.actions;

export default CommunitySlice;
