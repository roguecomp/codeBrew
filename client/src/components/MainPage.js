import React from 'react'
import NavBar from './NavBar'
import TimeDisplay from './TimeDisplay'

function MainPage(){

    return (
        <>
        <NavBar hideLinks = {false} />
        <TimeDisplay />
        </>
    )

}

export default MainPage;