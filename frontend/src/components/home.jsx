import React, { Component } from 'react';
import NavBar from './navbar';
import Movies from './movies';
import Search from './search';

/**
 * Component to integrate the main section.
 * @component
 */
class Home extends Component {
    state = {
    }

    render() {
        return (
            <div>
                <NavBar></NavBar>
                <div className="container py-4 bg-light">
                    <div className="row">
                        <Search></Search>
                        <Movies></Movies>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;