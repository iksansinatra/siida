import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

import firebaseConfig from './firebaseConfig';



const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore();
