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

export const fetchPostDetails = createAsyncThunk(
  'post/fetchPostDetails',
  async (postId: string, thunkApi) => {
    try {
      //const post = entities[postID];
      const response = await Api.getPostById(postId);
      return { postId, comments: response.comments };
    } catch (e) {
      console.log('post/fetchPostDetails', e);
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

export const createPost = createAsyncThunk(
  'post/createPost',
  async (
    {
      title,
      content,
      asPseudo,
      community: { name },
    }: {
      title: string;
      content: string;
      asPseudo: boolean;
      community: {
        name: string;
      };
    },
    thunkApi,
  ) => {
    try {
      const response = Api.createPost({
        title,
        content,
        asPseudo,
        community: { name },
      });
      return response;
    } catch (e) {
      console.log('post/createPost', e);
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
        //state.entities[payload.postId].likedByUsersId.includes()
        state.entities[payload.postId].isLikedByCurrentUser = true;
      } else if (payload.likeOption === 'unlike') {
        state.entities[payload.postId].voteCount--;
        state.entities[payload.postId].isLikedByCurrentUser = false;
      }
    });
    builder.addCase(fetchPostDetails.fulfilled, (state, { payload }) => {
      state.entities[payload.postId].comments = payload.comments;
    });
    builder.addCase(createPost.fulfilled, (state, { payload }) => {
      console.log(payload.message);
    });
  },
});

export const { resetPost } = PostSlice.actions;

export default PostSlice;
