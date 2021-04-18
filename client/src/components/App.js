import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './LandingPage'
import MainPage from './MainPage'
import DashboardPage from './DashboardPage';
import '../css/App.css';
import React from 'react';
import NavBar from './NavBar'
import TeamPage from './TeamPage'
import firebase, {auth} from './Firebase'
import {useAuthState} from 'react-firebase-hooks/auth';



function App() {
  const [user] = useAuthState(auth);
  
  // console.log(initPage)
  const [currentPage, setCurrentPage] = React.useState('landing')
  const [currentUser, setCurrentUser] =React.useState()

  React.useEffect( () =>{
    if (user){
      setCurrentPage('home')
    }else{
      setCurrentPage('landing')
    }

  }, [user])
  return (
    <div className="App">
      <NavBar hideLinks = {(user)? false:true} setCurrentPage = {setCurrentPage}/>

      <div className ='landingPage' style = {{display : (currentPage === "landing")? 'block':'none'}}>
      <LandingPage setCurrentUser = {setCurrentUser} currentUser = {currentUser}/> 
      </div> 
      <div className ='mainPage' style = {{display : (currentPage === "home")? 'block':'none'}}>
      <MainPage />
      </div>
      <div className ='teamPage' style = {{display : (currentPage =="team")? 'block':'none'}}>
      <TeamPage />
      </div>
      <div className ='dashboardPage' style = {{display : (currentPage === "dashboard")? 'block':'none'}}>
      <DashboardPage />
      </div>

      
    </div>
  );
}

export default App;
