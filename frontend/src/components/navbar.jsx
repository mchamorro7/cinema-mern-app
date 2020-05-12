import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { removeFromStorage } from '../utils/storage';
import { connect } from 'react-redux';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand>Cinema-MERN</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="https://www.linkedin.com/in/mateo-jes%C3%BAs-chamorro/" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/mchamorro7" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>User:
                        <NavbarText className="pl-2 text-primary">{props.user}</NavbarText>
                    </NavbarText>

                    {/* Go to log in section and remove JWT from Local Storage */}

                    <NavbarText className="ml-4" >
                        <Link to="/login" onClick={() => removeFromStorage('auth-token')}>
                            Logout
                        </Link>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
};
const mapStateToProps = (state) => ({
    user: state.user.userLogged
});
export default connect(mapStateToProps)(NavBar);
