import { combineReducers } from 'redux';
import { UserSlice, PostSlice } from './reducers';

const rootReducer = combineReducers({
  User: UserSlice.reducer,
  Post: PostSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
