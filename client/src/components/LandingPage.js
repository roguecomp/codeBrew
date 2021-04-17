import React from 'react'
import NavBar from './NavBar'
import landing_img from '../asserts/landing_illu.svg';
import top_circle from '../asserts/top_circle.svg';
import Button from 'react-bootstrap/Button'
import firebase from 'firebase';
import app from 'firebase'
import Firebase_auth from 'firebase'

app.initializeApp();

function SignIn(props){
    const setEmail = props.setEmail;

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
                    setEmail(result.additionalUserInfo.profile.email);
                   
                  
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
    return (
        <Button onClick = {signInwithGoogle}> Sign In With Google</Button>
    )

}

function LandingPage(){
    return (
        <>
        <NavBar hideLinks = {true} />
    
        <img className = 'top-circle' src ={top_circle} />
       
        <main>
            <section className = 'presentation'>
                <div className = "intro">
                    <div className = "intro-text">
                        <h1>Make Team Contribution Tracking Effortless</h1>
                    </div>
                    <div className = 'button-wrapper'>
                        <SignIn style = {{background:"#6C63FF" ,borderColor:"#6C63FF" }} ></SignIn>

                        {"   or   "}
                        <Button style = {{background:"#6C63FF" ,borderColor:"#6C63FF" }} className = 'sign-up'>sign Up</Button>

                    </div>
                    
                    <div className = "intro-sub-text">
                        <span>Get start for free. No credit card required.</span>
                    </div>

                </div>
                
                <div className = 'landing-img'>
                    <img src ={landing_img} />
                </div>

            </section>
        </main>
        </>
    )
}

export default LandingPage;