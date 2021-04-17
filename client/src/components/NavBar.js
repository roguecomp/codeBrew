import React from 'react';

function NavBar(props){
    const {hideLinks, setCurrentPage} = props
    return (
        <header style = {{background: hideLinks? "#FFFFFF" : "#EFEFEF"}}>
            <div className="header-container" >
            <div className = 'project-name-container'>
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
                    <div className ='nav-link' onClick = {()=>{setCurrentPage('sign out')}}>sign out</div>
                </div>
            </nav>
            </div>

        </header>
    )
}

export default NavBar;