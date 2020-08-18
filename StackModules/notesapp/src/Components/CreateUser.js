import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

    state= {
        dbUsers:[],
        userName: '',
        name: '',        
        lastname: '',
        phoneNumber: '',
        mail: ''
    }

    async componentDidMount(){
        const resUser = await axios.get('http://localhost:5000/api/users')
        this.setState({ dbUsers: resUser.data });
        console.log(this.state.dbUsers);
    }
    
    onSubmit = async (event) => {
        console.log('PRUEBA TEST');
        const resUser = await axios.post('http://localhost:5000/api/users', {
            userName: this.state.userName,
            name: this.state.name,
            lastname: this.state.lastname,
            phoneNumber: this.state.phoneNumber,
            mail: this.state.mail
        });
        console.log(resUser.data);
        event.preventDefault();        
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
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
                                <input name="lastname" type="text" className="form-control" value={this.state.lastname} onChange={this.onChange} />
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
                    <ul className="list-group">
                        {
                            this.state.dbUsers.map(user => {
                                return <li className="list-group-item" key={user._id}>{user.userName} - {user.phoneNumber} </li>
                              })
                        }
                    </ul>
                 </div>
            </div>           
        )
    }
}
