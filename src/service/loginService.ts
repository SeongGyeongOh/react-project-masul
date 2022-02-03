import { kakaoLogin, googleLogin } from './../modules/reducers/login';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

export const ggLogin = async () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const res = await signInWithPopup(auth, provider);
  const data = res.user.uid;
};

export class LoginService {
  firebaseApp = initializeApp(firebaseConfig);
  auth = getAuth();

  provider = new GoogleAuthProvider();

  onAuthChange(onUserStateChange: (user: User | null) => void) {
    onAuthStateChanged(this.auth, (user) => {
      onUserStateChange(user);
    });
  }

  onLogout() {
    signOut(this.auth)
      .then(() => {
        console.log('로그아웃 성공');
      })
      .catch((error) => {
        console.log('로그아웃 에러');
      });
  }

  kakaoLogin() {
    window.Kakao.Auth.login({
      success: (response: any) => {
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: (res: any) => {
            console.log('사용자 정보', res);
          },
        });
      },
      fail: (err: any) => {
        console.log(err);
      },
    });
  }
}
