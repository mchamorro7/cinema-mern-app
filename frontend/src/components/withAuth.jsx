import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { getFromStorage } from '../utils/storage';
import store from '../redux/store';
import { userLogged } from '../redux/actions/userLogged';

export default function withAuth(ComponentToProtect) {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                loading: true,
                redirect: false,
            };
        }

        componentDidMount() {
            const token = getFromStorage('auth-token');

            axios.post('http://localhost:4200/api/checkToken', { data: token })
                .then(res => {
                    if (res.status === 200) {
                        this.setState({ loading: false });
                        // console.log(res.data);
                        store.dispatch(userLogged(res.data.user_name));
                    } else {
                        const error = new Error(res.error);
                        throw error;
                    }
                })
                .catch(err => {
                    console.error(err);
                    this.setState({ loading: false, redirect: true });
                });
        }


        render() {
            const { loading, redirect } = this.state;
            if (loading) {
                return null;
            }
            if (redirect) {
                return <Redirect to="/login" />;
            }

            return <ComponentToProtect {...this.props} />;
        }
    }
}