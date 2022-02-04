import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

export class LoginService {
  firebaseApp = initializeApp(firebaseConfig);
  auth = getAuth();

  provider = new GoogleAuthProvider();

  googleLogin = async () => {
    const res = await signInWithPopup(this.auth, this.provider);
    const data = res.user.uid;
  };

  googleLogout = async () => {
    try {
      await signOut(this.auth);
    } catch (err) {
      console.log('로그아웃 에러', err);
    }
  };

  onAuthChange(onUserStateChange: (user: User | null) => void) {
    onAuthStateChanged(this.auth, (user) => {
      onUserStateChange(user);
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

  kakaoLogout = () => {
    if (!window.Kakao.Auth.getAccessToken()) {
      alert('Not logged in.');
      return;
    }
    window.Kakao.Auth.logout(function () {
      console.log('로그아웃 완료', window.Kakao.Auth.getAccessToken());
    });
  };
}
