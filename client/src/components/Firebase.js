import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

if (!firebase.apps.length){
    console.log(1)
    console.log(process.env.REACT_APP_FIREBAE_API_KEY)
    firebase.initializeApp({
    
        apiKey: process.env.REACT_APP_FIREBAE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
        databaseURL: process.env.REACT_APP_DATABASE_URL
    
    })

    

}

const auth = firebase.auth();


export {auth};
export default firebase;