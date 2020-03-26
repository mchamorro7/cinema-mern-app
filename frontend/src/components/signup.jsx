import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonLoader from './buttonLoader';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';


class SignUp extends Component {
    state = {
        user_name: '',
        user_password: '',
        first_name: '',
        last_name: '',
        email: '',
        loading: false
    };

    constructor(props) {
        super(props);

        this.onSignUp = this.onSignUp.bind(this);
        this.onUserNameChanges = this.onUserNameChanges.bind(this);
        this.onPasswordChanges = this.onPasswordChanges.bind(this);
        this.onFirstNameChanges = this.onFirstNameChanges.bind(this);
        this.onLastNameChanges = this.onLastNameChanges.bind(this);
        this.onEmailChanges = this.onEmailChanges.bind(this);
    }

    onUserNameChanges(event) {
        this.setState({
            user_name: event.target.value,
        });
    }

    onPasswordChanges(event) {
        this.setState({
            user_password: event.target.value,
        });
    }

    onFirstNameChanges(event) {
        this.setState({
            first_name: event.target.value,
        });
    }

    onLastNameChanges(event) {
        this.setState({
            last_name: event.target.value,
        });
    }

    onEmailChanges(event) {
        this.setState({
            email: event.target.value,
        });
    }

    async onSignUp() {
        const data = {
            user_name: this.state.user_name,
            user_password: this.state.user_password,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email
        }

        this.setState({ loading: true });

        await axios.post(`http://localhost:4200/api/users`, data)
            .then(res => {
                // console.log('Response#SignUp ', res);
                toast.success(`User created successfully!`);
                this.props.history.push('/login');
            })
            .catch(err => {
                // console.log('Error#SignUp', err);
                if (err.response) {
                    toast.error(`ERROR: ${err.response.data}`);
                }
            });
        this.setState({ loading: false });
    }

    render() {
        return (
            <div className="vh-100 bg-dark">
                <div className="container h-100">
                    <div className="row justify-content-center align-items-center d-flex h-100">
                        <div className="mx-4 col-md-5 align-middle mh-75 card">
                            <div className="card-body">
                                <Form>
                                    <div className="row">
                                        <Link to="/login">
                                            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
                                        </Link>
                                    </div>

                                    <h1 className="h3 mb-3 font-weight-normal text-center">Sign Up</h1>

                                    <FormGroup>
                                        <Label for="exampleEmail">User name</Label>
                                        <Input
                                            type="text"
                                            name="user_name"
                                            id="user_name"
                                            placeholder="User"
                                            value={this.state.user_name}
                                            onChange={this.onUserNameChanges} />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="user_password">Password</Label>
                                        <Input
                                            type="password"
                                            name="user_password"
                                            id="user_password"
                                            placeholder="Password"
                                            value={this.state.user_password}
                                            onChange={this.onPasswordChanges}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="exampleEmail">First name</Label>
                                        <Input
                                            type="text"
                                            name="first_name"
                                            id="first_name"
                                            placeholder="First name"
                                            value={this.state.first_name}
                                            onChange={this.onFirstNameChanges}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="exampleEmail">Last name</Label>
                                        <Input
                                            type="text"
                                            name="last_name"
                                            id="last_name"
                                            placeholder="Last Name"
                                            value={this.state.last_name}
                                            onChange={this.onLastNameChanges}
                                        />
                                    </FormGroup>

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
                                    <ButtonLoader text="Sign Up" loading={this.state.loading} onEvent={this.onSignUp}></ButtonLoader>
                                    {/* <Button className="float-right" color="primary" size="sm" onClick={this.onSignUp}>Sign Up</Button> */}
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;