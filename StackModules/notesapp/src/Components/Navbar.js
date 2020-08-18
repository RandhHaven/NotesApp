import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import imagenCompu from './Images/compu.png';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             
              <div className="container">
                <a>
                  <img src={imagenCompu} width="40" height="40" alt="" loading="lazy"></img>
                </a>
                <Link className="navbar-brand" to="/">
                  NotesApp                
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <Link className="nav-link active" to="/">Notes</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/create">Create Note</Link>
                    </li>
                  
                    <li className="nav-item">
                      <Link className="nav-link" to="/user">Create User</Link>
                    </li>
                  </ul>
                </div>
              </div>            
          </nav>
        );
    }
}
