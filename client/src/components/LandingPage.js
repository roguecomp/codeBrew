import React from 'react'
import NavBar from './NavBar'
import landing_img from '../asserts/landing_illu.svg';
// import landing_img2 from '../asserts/landing_illu2.svg';
import top_circle from '../asserts/top_circle.svg';
import cloud from '../asserts/cloud.svg';
import Button from 'react-bootstrap/Button'
import LandingImage from '../asserts/landing_illu2';
import firebase , {auth}from './Firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

//import { signInwithGoogle } from './SignIn';

//import SignIn from './SignIn'



function LandingPage(props) {
    const [user] = useAuthState(auth);
    const {setCurrentUser , currentUser } = props
    const [isLogin, setIsLogin] = React.useState(false)
    React.useEffect(() =>{
        const _isLogin = currentUser?true : false;
        setIsLogin(_isLogin)

    }, [currentUser])

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
                    setCurrentUser(user)
                    //window.open('http://localhost:3000/trackingsystem')
                   
                  
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

    
    
    // function signIn(){
    
    //     var win = window.open('/systemtracking');
    //     win.focus();
    //     // window.oldOpen = window.open;
    //     // window.open = function(url) { // reassignment function
    //     //     win.location = url;
    //     //     window.open = window.oldOpen;
    //     //     win.focus();
    //     // }
    //     signInwithGoogle() 


    // }
    

  

   
    
        return (
            <>
       
            {/* <NavBar hideLinks = {true} /> */}
            <img className = {user?'top-circle moving-circle':'top-circle'} src ={cloud} />
        
            <main>
                <section className = 'presentation'>
                    <div className = "intro">
                        <div className = "intro-text">
                            <h1>Make Team Contribution Tracking Effortless</h1>
                        </div>
                        <div className = 'button-wrapper'>
                            <Button style = {{background:"#6C63FF" ,borderColor:"#6C63FF" }} onClick={signInwithGoogle}>Sign up with google</Button>
                        </div>
                        
                        <div className = "intro-sub-text">
                            <span>Get started for free. No credit card required.</span>
                        </div>

                    </div>
                    
                    <div className = 'landing-img'>
                        {/* <img src ={landing_img2} /> */}
                        <LandingImage/>
                    </div>

                </section>
            </main>
            </>
        )
    }


export default LandingPage;