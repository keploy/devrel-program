import React from 'react';
import LandingPage from "./components/LandingPage"
import Details from "./components/Details"
import JoinCommunity from "./components/JoinCommunity"
import Navbar from "./components/Navbar"

import './App.css'; 

import { createContext, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(false);
    
  return (
    <>
        <div id={theme? "dark":"light"} className='bg'>
        <Navbar theme={theme} setTheme={setTheme}/>
        <LandingPage/>
        <Details />        
        <JoinCommunity />
        </div>
     </>
  );
}

export default App;
