import React, { Component } from 'react'
import axios from 'axios';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateNote extends Component {

    state = {
        title: '',
        content: '',
        dbUsers: [],
        userSelected: '',
        fecha:  new Date()
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onChangeDate = (date) => {
        this.setState({date});
    }

    getUsers = async () => {
        const restUser = await axios.get('http://localhost:5000/api/users');
        console.log('db user create note');
        console.log(restUser.data);
        //this.setState({ dbUsers: resUser.data });
        
        if (restUser.data.length > 0) {
            this.setState({
                dbUsers: restUser.data.map(user => user.userName),
                userSelected: restUser.data[0].userName
            });
        }
    }

    async componentDidMount(){   
        this.getUsers();
        console.log(this.state.dbUsers);
    }

    filtersClean(){
        this.setState({
            title: '',
            content: '',
            userSelected: '',
            fecha: new Date()
        })
    }

    onSubmit = async (event) => {
        event.preventDefault();
        const restNotes = await axios.post('http://localhost:5000/api/notes', {
            title: this.state.title,
            content: this.state.content,
            author: this.state.userSelected,
            date: this.state.fecha
        });
        this.filtersClean();
        console.log(restNotes.data);                  
    }

    render() {
        return (
            <div className="row mt-20">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card-header">
                        <h4> Create New Note </h4>
                    </div>
                    <form className="card-body" onSubmit={this.onSubmit}>
                        <div className="row pt-2">                          
                            <div className="col-md-4">
                                <label> Title: </label>
                            </div>
                            <div className="col-md-8">
                                <input name="title" placeholder="Title" type="text" className="form-control" value={this.state.title} onChange={this.onChange} required/>
                            </div>                           
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-4">
                                <label> Content: </label>
                            </div>
                            <div className="col-md-8">
                                <textarea name="content" type="text" className="form-control" value={this.state.content} onChange={this.onChange} required/>
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-4">
                                <label> Author: </label>
                            </div>
                            <div className="col-md-8">
                                <select
                                    className="form-control"
                                    value={this.state.userSelected}
                                    onChange={this.onChange}
                                    name="userSelected"
                                    required>
                                    {
                                        this.state.dbUsers.map((user, i)  => (
                                            <option key={user}>
                                                {user}
                                            </option>
                                        ))
                                    }
                                </select>                                
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-4">
                                <label> Fecha: </label>
                            </div>
                            <div className="col-md-8">
                                <Datepicker name="fecha" type="text" className="form-control" value={this.state.fecha} selected={this.state.date} onChange={this.onChangeDate} required/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <input className="btn btn-primary" type="submit" value="Create Note"/>
                        </div>                        
                    </form>
               </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}
