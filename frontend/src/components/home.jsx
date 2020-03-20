import React, { Component } from 'react';
import NavBar from './navbar';
import Movies from './movies';

class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <Movies></Movies>
            </div>
        );
    }
}

export default Home;