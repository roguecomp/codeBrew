import React from 'react'
import NavBar from './NavBar'
import landing_img from '../asserts/landing_illu.svg';
import top_circle from '../asserts/top_circle.svg';
import Button from 'react-bootstrap/Button'

import { signInWithGoogle } from './firebase';

class LandingPage extends React.Component {

    constructor() {
        super();

        this.state = {
        currentUser: null
        };
    }

    render() {
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
                            <Button style = {{background:"#6C63FF" ,borderColor:"#6C63FF" }} onClick={signInWithGoogle}>Sign up with google</Button>
                        </div>
                        
                        <div className = "intro-sub-text">
                            <span>Get started for free. No credit card required.</span>
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
}

export default LandingPage;