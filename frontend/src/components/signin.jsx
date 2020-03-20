import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class SignIn extends Component {
    state = {};
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
                                        <Label for="user_name">User name</Label>
                                        <Input type="text" name="user_name" id="user_name" placeholder="User" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="user_password">Password</Label>
                                        <Input
                                            type="password"
                                            name="user_password"
                                            id="user_password"
                                            placeholder="Password"
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

                                    <Button color="primary" size="lg" block outline>Log in</Button>
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
