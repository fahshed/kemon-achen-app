import { combineReducers } from 'redux';
import { UserSlice, PostSlice, CommunitySlice } from './reducers';

const rootReducer = combineReducers({
  User: UserSlice.reducer,
  Post: PostSlice.reducer,
  Community: CommunitySlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
