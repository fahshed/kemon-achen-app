import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { normalize, schema } from 'normalizr';

import { LikeOptions, Post } from '../../../api';
import Api from '../../../api';

const postEntity = new schema.Entity('posts', {}, { idAttribute: '_id' });

export const fetchPosts = createAsyncThunk(
  'post/fetchPosts',
  async (_, thunkApi) => {
    try {
      const response = await Api.getFeed();
      const normalized = normalize(response, [postEntity]);
      return normalized;
    } catch (e) {
      console.log('post/fetchPosts', e);
      return thunkApi.rejectWithValue(e);
    }
  },
);

export const likePost = createAsyncThunk(
  'post/likePost',
  async (
    { postId, likeOption }: { postId: string; likeOption: LikeOptions },
    thunkApi,
  ) => {
    try {
      Api.likePost(postId, likeOption);
      return { postId, likeOption };
    } catch (e) {
      console.log('post/likePost', e);
      return thunkApi.rejectWithValue(e);
    }
  },
);

const postAdapter = createEntityAdapter({
  selectId: (post: Post) => post._id,
});

const initialState = postAdapter.getInitialState();

const PostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    resetPost: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      state.entities = { ...state.entities, ...payload.entities.posts };
      state.ids = payload.result;
    });
    builder.addCase(likePost.fulfilled, (state, { payload }) => {
      if (payload.likeOption === 'like') {
        state.entities[payload.postId].voteCount++;
      } else if (payload.likeOption === 'unlike') {
        state.entities[payload.postId].voteCount--;
      }
    });
  },
});

export const { resetPost } = PostSlice.actions;

export default PostSlice;
