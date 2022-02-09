import { LoginUser } from './../modules/sagas/login';
import { initializeApp } from 'firebase/app';
import {
  deleteUser,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
} from 'firebase/auth';
import { resolve } from 'path/posix';
import UserService from './userService';

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
    const result = await signInWithPopup(this.auth, this.provider);
    return result.user?.email?.replaceAll('@', '').replaceAll('.', '');
  };

  uploadUser = (uid: string, userId: string, nickname: string) => {
    const userService = new UserService();
    userService.upload(uid, userId, nickname);
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
        const updatedUid = user?.email?.replaceAll('@', '').replaceAll('.', '');
        user && resolve(updatedUid || '닉네임 없음');
      });
      return resolve;
    });
  }

  kakaoLogin = () => {
    return new Promise((resolve, reject) => {
      window.Kakao.Auth.login({
        success: (res: any) => {
          console.log(res);
          this.kakaoGetUser(resolve);
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

  kakaoGetUser = (resolve: (value: string) => void) => {
    window.Kakao.API.request({
      url: '/v2/user/me',
      success: (response: any) => {
        resolve(response.id);
      },
      fail: (error: any) => {
        console.log(error);
      },
    });
  };

  kakaoCheckNickname = () => {
    return new Promise<string>((resolve, reject) => {
      const userService = new UserService();
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (response: any) => {
          resolve(response.id);
        },
        fail: (error: any) => {
          console.log(error);
        },
      });
    });
  };
}
