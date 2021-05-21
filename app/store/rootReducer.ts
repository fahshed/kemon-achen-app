import { combineReducers } from 'redux';
import { UserSlice } from './reducers';

const rootReducer = combineReducers({
  User: UserSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
