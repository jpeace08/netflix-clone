import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

// we need to somehow seed the database


//we need a config here

const config = {
    apiKey: "AIzaSyBzW1C3dOSKSu-P18B6oqJYiuvyUx0D0L4",
    authDomain: "neflix-clone-f463c.firebaseapp.com",
    projectId: "neflix-clone-f463c",
    storageBucket: "neflix-clone-f463c.appspot.com",
    messagingSenderId: "825793906620",
    appId: "1:825793906620:web:d2fc89196474453e5ccdb9",
    measurementId: "G-HV0F7ST03X"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase};