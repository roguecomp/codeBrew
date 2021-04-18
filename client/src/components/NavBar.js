import React from 'react';
import Logo from '../asserts/trackOnTriLogo.svg'
import firebase, {auth} from "./Firebase"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
function NavBar(props){

    const [show, setShow] = React.useState(false);

    const signOut = () => {
        
        setShow(false);
        auth.signOut();
        setCurrentPage("landing")


    }
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const {hideLinks, setCurrentPage} = props

  
    return (
        <>
        <header style = {{background: hideLinks? "#FFFFFF" : "#EFEFEF"}}>
            <div className="header-container" >
            <div className = 'project-name-container'>
                <img src={Logo}/>
                <span className="project-name"
                onClick = {()=>{setCurrentPage("landing")}}
                >TrackOnTri</span>
                

            </div>
            <nav>
                {/* <ul className = "nav-links" style = {{display: hideLinks? "none" : "flex"}}>
                    <li className ='nav-link'><a herf= "#">home</a></li>
                    <li className ='nav-link'><a herf= "#">time</a></li>
                    <li className ='nav-link'><a herf= "#">dashboard</a></li>
                    <li className ='nav-link'><a herf= "#">sign out</a></li>
                </ul> */}

                <div className = "nav-links" style = {{display: hideLinks? "none" : "flex"}}>
                    <div className ='nav-link' onClick = {()=>{setCurrentPage("home")}}>home</div>
                    <div className ='nav-link' onClick = {()=>{setCurrentPage('team')}}>my team</div>
                    <div className ='nav-link' onClick = {()=>{setCurrentPage('dashboard')}}>dashboard</div>
                    <div className ='nav-link' onClick = {()=>handleShow()}>sign out</div>
                </div>
            </nav>
            </div>

        </header>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Confirm Sign Out</Modal.Title>
            </Modal.Header>
            <Modal.Body>Thank you for using TrackOrTri. See you next time ^.^</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Stay Sign In
            </Button>
            <Button variant="primary" onClick={signOut}>
                Sign Out
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default NavBar;