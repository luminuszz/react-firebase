import firebase from 'firebase';

import { googleConfig } from '../config/googleConfig';

const authProvider = new firebase.auth.GoogleAuthProvider();

authProvider.addScope(googleConfig.baseUrl);

export default authProvider;
