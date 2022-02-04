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
<<<<<<< HEAD

// 루트 리듀서의 반환값를 유추해줍니다
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내줍니다.
=======
>>>>>>> bb14cc3048de26dcd9dad512414cc6eb7dab9de0
export type RootState = ReturnType<typeof rootReducer>;
