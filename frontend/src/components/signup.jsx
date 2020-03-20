import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

class SignUp extends Component {
    state = {}
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
                                        <Input type="text" name="user_name" id="user_name" placeholder="User" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input
                                            type="password"
                                            name="password"
                                            id="examplePassword"
                                            placeholder="Password"
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="exampleEmail">First name</Label>
                                        <Input type="text" name="first_name" id="first_name" placeholder="First name" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="exampleEmail">Last name</Label>
                                        <Input type="text" name="last_name" id="last_name" placeholder="Last Name" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input type="email" name="email" id="email" placeholder="Email" />
                                    </FormGroup>

                                    <button className="btn-primary btn-sm float-right">Sign Up</button>
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