import React, { Component } from 'react';
import axios from 'axios';

export default class NotesList extends Component {

    componentDidMount(){
        axios.get('http://localhost:5000/api/notes')
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    render() {
        return (
            <div>
                Notes List                
            </div>
        )
    }
}
