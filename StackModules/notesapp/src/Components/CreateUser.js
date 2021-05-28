import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    state = {
        dbUsers:[],
        userName: '',
        name: '',        
        lastName: '',
        phoneNumber: '',
        mail: ''
    }

    getUsers = async () => {
        console.log(process.env.PORT);
        const resUser = await axios.get(process.env.URL_USERS_LOCAL);
        this.setState({ dbUsers: resUser.data });
        console.log(resUser.data);
    }

    async componentDidMount(){
        this.getUsers();        
    }

    filtersClean(){
        this.setState({
            userName: '',
            user: '',
            lastName: '',
            mail:'',
            phoneNumber: ''
        })
    }
    
    onSubmit = async (event) => {
        event.preventDefault();
        const resUser = await axios.post(process.env.URL_USERS_LOCAL, {
            userName: this.state.userName,
            name: this.state.name,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            mail: this.state.mail
        });
        this.getUsers();
        this.filtersClean();
        console.log(resUser.data);                  
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onDeleteUser = async (userId) =>{        
        console.log(userId);
        await axios.delete(process.env.URL_USERS_LOCAL + userId);
        this.getUsers();
    }

    onUpdateUser = () =>{
    }

    render() {
        const usersList = this.state.dbUsers.map((user, i) =>{
            return (
                <li className="list-group-item" key={user._id}>
                    <div className="row col-md-12">
                        <div className="row col-md-12">
                            <div className="col-md-3">                                
                                {user.userName} 
                            </div>
                            <div className="col-md-2">
                                {user.name} 
                            </div>
                            <div className="col-md-2">
                                {user.lastName} 
                            </div>
                            <div className="col-md-2">
                                {user.phoneNumber} 
                            </div>
                            <div className="col-md-3">
                                {user.mail} 
                            </div>                            
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <button className="btn btn-primary center-block" type="button" onClick={() => this.onUpdateUser(user._id)}>Edit</button>
                            </div>
                            <div className="col-md-6">
                                <button className="btn btn-danger center-block" type="button" onClick={() => this.onDeleteUser(user._id)}>Delete</button>  
                            </div>
                        </div>
                    </div>
                </li>
              )
            }
        )

        return (
            <div className="row col-md-12">
                <div className="col-md-4">
                    <div className="card-header">
                        <h4> Create New User </h4>
                    </div>
                    <form className="card-body" onSubmit={this.onSubmit}>
                        <div className="row pt-2">                          
                            <div className="col-md-4">
                                <label> User: </label>
                            </div>
                            <div className="col-md-8">
                                <input name="userName" type="text" className="form-control" value={this.state.userName} onChange={this.onChange} />
                            </div>                           
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-4">
                                <label> Name: </label>
                            </div>
                            <div className="col-md-8">
                                <input name="name" type="text" className="form-control" value={this.state.name} onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-4">
                                <label> Last Name: </label>
                            </div>
                            <div className="col-md-8">
                                <input name="lastName" type="text" className="form-control" value={this.state.lastName} onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-4">
                                <label> Cell Phone: </label>
                            </div>
                            <div className="col-md-8">
                                <input name="phoneNumber" type="text" className="form-control" value={this.state.phoneNumber} onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-4">
                                <label>Email: </label>
                            </div>
                            <div className="col-md-8">
                                <input name="mail" type="email" className="form-control" value={this.state.mail} onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-4" />
                            <div className="col-md-4">
                                <input className="btn btn-primary" type="submit" value="Create User"/>
                            </div>
                            <div className="col-md-4" />                                   
                        </div>
                    </form>
                </div>
                <div className="col-md-8">
                    <div className="container">                        
                        <div className="card-header ">
                            <h4> Users </h4>
                        </div>
                        <ul className="list-group">
                            { usersList } 
                        </ul>
                    </div>                   
                </div>
            </div>           
        )
    }
}
