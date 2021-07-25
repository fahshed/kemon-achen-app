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
  async ({ page, limit }: { page: number; limit: number }, thunkApi) => {
    try {
      const response = await Api.getFeed(page, limit);
      const normalized = normalize(response, [postEntity]);
      return normalized;
    } catch (e) {
      console.log('post/fetchPosts', e);
      return thunkApi.rejectWithValue(e);
    }
  },
);

export const fetchCommunityPosts = createAsyncThunk(
  'post/fetchCommunityPosts',
  async (communityId: string, thunkApi) => {
    try {
      const response = await Api.getCommunityFeed(communityId);
      const normalized = normalize(response, [postEntity]);
      return normalized;
    } catch (e) {
      console.log('post/fetchCommunityPosts', e);
      return thunkApi.rejectWithValue(e);
    }
  },
);

export const fetchUserPosts = createAsyncThunk(
  'post/fetchUserPosts',
  async (userId: string, thunkApi) => {
    try {
      const response = await Api.getPostsByUserId(userId);
      const normalized = normalize(response, [postEntity]);
      return normalized;
    } catch (e) {
      console.log('post/fetchUserPosts', e);
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
      postType,
    }: {
      title: string;
      content: string;
      asPseudo: boolean;
      community: {
        name: string;
      };
      postType: string;
    },
    thunkApi,
  ) => {
    try {
      const response = await Api.createPost({
        title,
        content,
        asPseudo,
        community: { name },
        postType,
      });
      const normalized = normalize([response], [postEntity]);
      return normalized;
    } catch (e) {
      console.log('post/createPost', e);
      return thunkApi.rejectWithValue(e);
    }
  },
);

export const createComment = createAsyncThunk(
  'post/createComment',
  async (
    { postId, comment }: { postId: string; comment: string },
    thunkApi,
  ) => {
    try {
      const response = await Api.createComment(postId, { content: comment });
      //console.log('create comment ', response);
      return { postId, comment: response };
    } catch (e) {
      console.log('post/createComment', e);
      return thunkApi.rejectWithValue(e);
    }
  },
);

const postAdapter = createEntityAdapter({
  selectId: (post: Post) => post._id,
});

const initialState = postAdapter.getInitialState({
  page: -1,
});

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
      state.page++;
    });

    builder.addCase(fetchCommunityPosts.fulfilled, (state, { payload }) => {
      state.entities = { ...state.entities, ...payload.entities.posts };
    });

    builder.addCase(fetchUserPosts.fulfilled, (state, { payload }) => {
      state.entities = { ...state.entities, ...payload.entities.posts };
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
      state.entities = { ...payload.entities.posts, ...state.entities };
    });

    builder.addCase(createComment.fulfilled, (state, { payload }) => {
      state.entities[payload.postId].comments.unshift(payload.comment); //unshift appends at the beginning of the array
      state.entities[payload.postId].commentCount++;
    });
  },
});

export const { resetPost } = PostSlice.actions;

export default PostSlice;
