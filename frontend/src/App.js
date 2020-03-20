import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Home from './components/home';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

class App extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <main>
                    <Switch>
                        <Route exact path="/login" component={SignIn} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/home" component={Home} />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;