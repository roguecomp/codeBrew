import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {

    apiKey: "AIzaSyDHDERKxdA-LlIme9a9qI0Q7p9jJvFdJes", 
    authDomain: "myapp-project-123.firebaseapp.com",
    databaseURL: "https://codebrew-b05f9.firebaseio.com",
    projectId: "codebrew-b05f9", 
    storageBucket: "myapp-project-123.appspot.com", 
    messagingSenderId: "1035866369641",
    appId: "1:1035866369641:web:98544609f76afac0777cf8", 
}

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
