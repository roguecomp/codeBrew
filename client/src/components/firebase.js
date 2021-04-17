import { FirebaseAuthProvider } from '@react-firebase/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export const auth = firebase.auth();

const app = firebase.initializeApp({

    apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO", 
    authDomain: "myapp-project-123.firebaseapp.com",
    databaseURL: "https://myapp-project-123.firebaseio.com",
    projectId: "myapp-project-123", 
    storageBucket: "myapp-project-123.appspot.com", 
    messagingSenderId: "65211879809",
    appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c", 
})

export function Firebase_auth() {
    return (
        <FirebaseAuthProvider firebase={firebase} {...config} >
            {
                //app code
            }
        </FirebaseAuthProvider>
    )
}

export {auth};
export default {app};
export default firebase;

