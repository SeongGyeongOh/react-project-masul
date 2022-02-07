import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

export default class UserService {
  // firebaseApp = initializeApp(firebaseConfig);

  database = getDatabase();

  upload(token: string, userId: string, nickName: string) {
    console.log('유저정보', userId, nickName);
    const db = this.database;
    set(ref(db, `masulUsers/${token}`), {
      userId: userId,
      nickName: nickName,
    });
  }
}
