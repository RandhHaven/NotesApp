import React, { Component } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';

export default class NotesList extends Component {

    state = {
        dbNotes: [],
        title: '',
        content: '',
        author: '',
        fecha: ''
    }

    getNotes = async () => {
        const restNotes = await axios.get('https://notesappmodules.herokuapp.com/api/notes')
        this.setState({ dbNotes: restNotes.data });
    }

    componentDidMount = async () => {
        this.getNotes();
    }
    
    onDeleteNote = async (noteId) =>{        
        console.log(noteId);
        await axios.delete('https://notesappmodules.herokuapp.com/api/notes/' + noteId);
        this.getNotes();
    }

    render() {
        const notesList = this.state.dbNotes.map((note, i) =>{
            return (
              <div className="col-md-4 p-2" key={note._id}>
                    <div className="card">
                        <div className="card-header ">
                            <h4> {note.title} </h4>
                        </div>
                        <div className="row card-body">
                            <div className="col-md-8">
                                {note.content} 
                            </div>
                            <div className="col-md-8">
                                {note.author} 
                            </div>
                            <div className="col-md-6">
                                {format(note.date)} 
                            </div>
                        </div>
                        <div className="card-footer">                            
                            <div className="col-md-6">
                                <button className="btn btn-danger center-block" type="button" onClick={() => this.onDeleteNote(note._id)}>Delete</button>  
                            </div>
                        </div>
                    </div>
                </div>
              )
            }
        )

        return (
            <div className="row">
                { notesList }    
            </div>
        )
    }
}
