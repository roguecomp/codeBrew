import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './LandingPage'
import MainPage from './MainPage'
import '../css/App.css';
import React from 'react';
import NavBar from './NavBar'



function App() {
  const [currentPage, setCurrentPage] = React.useState('landing')
  return (
    <div className="App">
      <NavBar hideLinks = {(currentPage =="landing")? true:false} setCurrentPage = {setCurrentPage}/>

      <div className ='landingPage' style = {{display : (currentPage =="landing")? 'block':'none'}}>
      <LandingPage/> 
      </div> 
      <div className ='mainPage' style = {{display : (currentPage =="home")? 'block':'none'}}>
      <MainPage />
      </div>
      <div className ='teamPage' style = {{display : (currentPage =="team")? 'block':'none'}}>
      <teamPage />
      </div>
      

      
    </div>
  );
}

export default App;
