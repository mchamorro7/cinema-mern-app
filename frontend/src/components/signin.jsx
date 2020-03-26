import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { setInStorage } from '../utils/storage';
import ButtonLoader from './buttonLoader';
import { toast } from 'react-toastify';

class SignIn extends Component {

    state = {
        email: '',
        password: '',
        loading: false
    };

    constructor(props) {
        super(props);

        this.onSignIn = this.onSignIn.bind(this);
        this.onEmailChanges = this.onEmailChanges.bind(this);
        this.onPasswordChanges = this.onPasswordChanges.bind(this);
    }

    async onSignIn() {
        this.setState({ loading: true });
        // Send HTTP POST req to backend 'api/users/login'
        await axios.post(`http://localhost:4200/api/users/login`,
            {
                email: this.state.email,
                user_password: this.state.password
            }).then(res => {
                // console.log('Response#LogIn', res);
                // console.log('Res.data#LogIn', res.data);

                // Set token in Local Storage and go to route '/'
                setInStorage('auth-token', res.data);
                this.props.history.push('/');
            })
            .catch(err => {
                // console.log('Error#LogIn', { err: err });
                if (err.response) {
                    toast.error(`Error: ${err.response.data}`);
                }
            });
        this.setState({ loading: false });
    }

    onEmailChanges(event) {
        this.setState({
            email: event.target.value,
        });
    }

    onPasswordChanges(event) {
        this.setState({
            password: event.target.value,
        });
    }

    render() {

        return (
            <div className="vh-100 bg-dark">
                <div className="container h-100">
                    <div className="row justify-content-center align-items-center d-flex h-100">
                        <div className="mx-4 col-md-4 align-middle mh-50 card">
                            <div className="card-body">
                                <Form>
                                    <h1 className="h3 mb-3 font-weight-normal text-center">Log In</h1>

                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.onEmailChanges} />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="user_password">Password</Label>
                                        <Input
                                            type="password"
                                            name="user_password"
                                            id="user_password"
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChange={this.onPasswordChanges}
                                        />
                                    </FormGroup>

                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> Remember
										</Label>
                                    </FormGroup>

                                    <Link to="/signup">
                                        <Button color="primary" size="lg" block className="my-2">Sign up</Button>
                                    </Link>

                                    <ButtonLoader text="Log in" loading={this.state.loading} onEvent={this.onSignIn}></ButtonLoader>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;
