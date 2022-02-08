import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
} from 'firebase/auth';
import { resolve } from 'path/posix';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

type Fun = {
  (arg: (isLogin: boolean) => boolean): any;
};

export class LoginService {
  firebaseApp = initializeApp(firebaseConfig);
  auth = getAuth();

  provider = new GoogleAuthProvider();

  googleLogin = async () => {
    await signInWithPopup(this.auth, this.provider);
  };

  googleUpdateProfile = (nickname: string) => {
    updateProfile(this.auth.currentUser!, {
      displayName: nickname,
    });
  };

  googleLogout = async () => {
    try {
      await signOut(this.auth);
    } catch (err) {
      console.log('로그아웃 에러', err);
    }
  };

  onAuthChange() {
    const auth = getAuth();
    return new Promise<string>((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        user && resolve(user.displayName || '닉네임 없음');
        // onUserStateChange(user);
      });
      return resolve;
    });
  }

  kakaoLogin = () => {
    return new Promise((resolve, reject) => {
      window.Kakao.Auth.login({
        success: (res: any) => {
          console.log(res);
          resolve(true);
        },
        fail: () => {
          reject(() => false);
        },
      });
    });
  };

  kakaoLogout = () => {
    if (!window.Kakao.Auth.getAccessToken()) {
      alert('Not logged in.');
      return;
    }
    window.Kakao.Auth.logout(function () {
      console.log('로그아웃 완료', window.Kakao.Auth.getAccessToken());
    });
  };

  kakaoCheckNickname = () => {
    return new Promise<string>((resolve, reject) => {
      window.Kakao.API.request({
        url: '/v2/user/me',
        data: {
          property_keys: ['properties.nickname'],
        },
        success: (response: any) => {
          const nickname: string = response.properties.nickname;
          resolve(nickname);
        },
        fail: (error: any) => {
          console.log(error);
        },
      });
      return resolve;
    });
  };
}
