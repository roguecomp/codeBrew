import React from 'react';

function NavBar(props){
    const {hideLinks} = props
    return (
        <header style = {{background: hideLinks? "#FFFFFF" : "#EFEFEF"}}>
            <div className="header-container" >
            <div className = 'project-name-container'>
                <span className="project-name">TrackOnTri</span>

            </div>
            <nav>
                <ul className = "nav-links" style = {{display: hideLinks? "none" : "flex"}}>
                    <li className ='nav-link'><a herf= "#">home</a></li>
                    <li className ='nav-link'><a herf= "#">time</a></li>
                    <li className ='nav-link'><a herf= "#">dashboard</a></li>
                    <li className ='nav-link'><a herf= "#">sign out</a></li>
                </ul>
            </nav>
            </div>

        </header>
    )
}

export default NavBar;