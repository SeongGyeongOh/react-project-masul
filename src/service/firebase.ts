import { googleLogin } from './../modules/reducers/login';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';

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

  googleLogin() {
    signInWithPopup(this.auth, this.provider)
      .then((result) => {
        console.log('로그인 결과', result.user.uid);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onAuthChange() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log('로그인', uid);
      } else {
        console.log('로그아웃');
      }
    });
  }
}
