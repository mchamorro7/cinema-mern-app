import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Home from './components/home';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import withAuth from './components/withAuth';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Call it once in your app. At the root of your app is the best place
toast.configure({
    autoClose: 5000,
    draggable: false,
});

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
                        <Route exact path="/" component={withAuth(Home)} />
                        <Route render={() => <Redirect to="/" />} />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;