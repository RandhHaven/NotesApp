import React from 'react';
import './App.css';
import {BrowserRouter as router, Route} from 'react-router-dom'

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>

      Notes App 
    <Footer/>
    </div>
  );
}

export default App;
