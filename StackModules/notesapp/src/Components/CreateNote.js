import React, { Component } from 'react'
import axios from 'axios';

export default class CreateNote extends Component {

    state = {
        dbNotes:[],
        title: '',
        content: '',
        author: '',
        fecha: ''
    }

    onSubmit(){
    }

    onChange(){
    }

    render() {
        return (
            <div className="row mt-20">
                <div className="col-md-12">
                    <div className="card-header">
                        <h4> Create New Note </h4>
                    </div>
                    <form className="card-body" onSubmit={this.onSubmit}>
                        <div className="row pt-2">                          
                            <div className="col-md-4">
                                <label> Title: </label>
                            </div>
                            <div className="col-md-8">
                                <input name="title" type="text" className="form-control" value={this.state.title} onChange={this.onChange} />
                            </div>                           
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-4">
                                <label> Content: </label>
                            </div>
                            <div className="col-md-8">
                                <input name="content" type="text" className="form-control" value={this.state.content} onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-4">
                                <label> Author: </label>
                            </div>
                            <div className="col-md-8">
                                <input name="author" type="text" className="form-control" value={this.state.author} onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <input className="btn btn-primary" type="submit" value="Create User"/>
                        </div>                        
                    </form>
               </div>
            </div>
        )
    }
}
