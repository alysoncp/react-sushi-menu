import React, { Component } from 'react';


class NavBar extends Component {

    render() { 
        return (
            <nav className="navbar navbar-light bg-light justify-content-between">
                <h4 className="navbar-brand mx-auto " >
                    Menu Items
                    <span className="badge badge-pill badge-secondary ml-4">{this.props.totalCounters}</span>
                </h4>
            </nav>
        );
    }
};
 
export default NavBar;