import React from 'react'
import NavBar from './NavBar'
import TimeDisplay from './TimeDisplay'
import TaskList from './TaskList'
import sampleAvatar from '../asserts/Avatar11.svg'


function MainPage(){

    return (
        <>
        <NavBar hideLinks = {false} />
        <div className="my-card profile-card">
            <img src = {sampleAvatar}/>
            
            <div className = 'text-area'>
                <div className = 'user-name' style={{fontSize : '1.5vw'}} > Fake user name </div>
                <div className = 'user-email' style={{fontSize : '1vw'}} >  Fakeemail.gmail.com</div>

            </div>
            
        </div>
        <div className="my-card timer-card">
            
            <TimeDisplay />
            
            <div className ='taskList-wrapper'>
                <TaskList />
            </div>


        </div>
        
        </>
    )

}

export default MainPage;