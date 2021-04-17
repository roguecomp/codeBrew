import React from 'react';
import Button from 'react-bootstrap/Button';
import firebase , {auth}from './Firebase';


const signInwithGoogle  =()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
                console.log("sign in success")
                console.log(result)
                //setEmail(result.additionalUserInfo.profile.email);
               
              
            }).catch((error) => {
                console.log(error)
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
        }

// function SignOut(){
//     //const setEmail = props.setEmail;

//     const mySignOut = ()=>{
//         auth.signOut();
//         //setEmail("");
//     }


//     return auth.currentUser && (
//         <>
//         <Button onClick = {() =>  mySignOut()}> Sign Out</Button>
//         </>

//     )

// }


// function SignIn(){



//     const signInwithGoogle  =()=>{
//         const provider = new firebase.auth.GoogleAuthProvider();
//         firebase.auth()
//                 .signInWithPopup(provider)
//                 .then((result) => {
//                     /** @type {firebase.auth.OAuthCredential} */
//                     var credential = result.credential;

//                     // This gives you a Google Access Token. You can use it to access the Google API.
//                     var token = credential.accessToken;
//                     // The signed-in user info.
//                     var user = result.user;
//                     // ...
//                     console.log("sign in success")
//                     console.log(result)
//                     //setEmail(result.additionalUserInfo.profile.email);
                   
                  
//                 }).catch((error) => {
//                     console.log(error)
//                     // Handle Errors here.
//                     var errorCode = error.code;
//                     var errorMessage = error.message;
//                     // The email of the user's account used.
//                     var email = error.email;
//                     // The firebase.auth.AuthCredential type that was used.
//                     var credential = error.credential;
//                     // ...
//                 });
//     }
//     return (
//         <Button onClick = {signInwithGoogle}> Sign In</Button>
//     )

// }


//export default SignIn; 

export {signInwithGoogle}; 
