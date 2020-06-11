import firebase from 'firebase';

import { FirebaseConfig } from '../config/firebaseConfig';

const api = firebase.initializeApp(FirebaseConfig);

export default api;
