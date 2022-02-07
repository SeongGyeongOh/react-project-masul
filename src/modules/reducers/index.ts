import { LoginState } from './login';
/** root reducer */
import { combineReducers } from 'redux';
import post from './post';
import login from './login';
import alcholcup from './alcholcup';
import recommend from './recommend';

const rootReducer = combineReducers({
  post,
  login,
  alcholcup,
  recommend,
});

// 루트 리듀서를 내보내주세요.
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
