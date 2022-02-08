import { initializeApp } from 'firebase/app';
import { UserType } from './../modules/reducers/login';
import { getDatabase, onValue, ref, set, off } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

export default class UserService {
  // firebaseApp = initializeApp(firebaseConfig);
  database = getDatabase();

  upload(uid: string, userId: string, nickname: string) {
    const db = this.database;
    set(ref(db, `masulUsers/${uid}`), {
      userId: userId,
      nickname: nickname,
    });
  }

  getUser(uid: string) {
    return new Promise((resolve, reject) => {
      const db = getDatabase();
      const dbRef = ref(db, `masulUsers/${uid}/`);
      onValue(dbRef, (snapshot) => {
        const data: UserType = snapshot.val();
        // getData(data);
        resolve(data);
      });
      // return () => off(userRef);
    });
  }
}
