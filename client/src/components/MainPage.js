import React from 'react'
import NavBar from './NavBar'
import TimeDisplay from './TimeDisplay'

class MainPage extends React.Component {

    render() { 
        return (
            <>
            <NavBar hideLinks = {false} />
            <TimeDisplay />
            </>
        )
    }

}

export default MainPage;