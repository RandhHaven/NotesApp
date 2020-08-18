import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateNote from './Components/CreateNote';
import CreateUser from './Components/CreateUser';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import NotesList from './Components/NotesList';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container p-2">
        <Route path='/' exact component = { NotesList }  />
        <Route path='/edit/:id' component = { CreateNote } />
        <Route path='/create' component = { CreateNote } />
        <Route path='/user' component = { CreateUser } />
      </div>      
      <Footer/>
    </Router>
  );
}

export default App;
