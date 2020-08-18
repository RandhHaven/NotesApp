import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Footer</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        )
    }
}