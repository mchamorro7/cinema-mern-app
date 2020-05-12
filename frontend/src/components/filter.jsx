import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Form, FormGroup, CustomInput } from 'reactstrap';
import { fetchMovies } from '../redux/actions/findMovies'
import { connect } from 'react-redux';

/**
 * Component to filter movies depending on the genre.
 * @component
 */
class Filter extends Component {
    state = {
        modal: false,
        Action: false,
        Comedy: false,
        Aventure: false,
        Fiction: false,
        Drama: false,
    }

    constructor(props) {
        super(props);

        this.onActionChanges = this.onActionChanges.bind(this);
        this.onFictionChanges = this.onFictionChanges.bind(this);
        this.onComedyChanges = this.onComedyChanges.bind(this);
        this.onAventureChanges = this.onAventureChanges.bind(this);
        this.onDramaChanges = this.onDramaChanges.bind(this);
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    }

    applyFilters = () => {
        let copyState = { ...this.state };
        let params = [];
        delete copyState.modal;
        Object.entries(copyState).forEach(entry => {
            let key = entry[0];
            let value = entry[1];
            if (value) {
                params.push({ genre: key });
            }
        });

        this.props.fetchMovies(params);
        this.setState({ modal: !this.state.modal });
    }

    onActionChanges(event) {
        this.setState({
            Action: event.target.checked,
        });
    }

    onFictionChanges(event) {
        this.setState({
            Fiction: event.target.checked,
        });
    }

    onComedyChanges(event) {
        this.setState({
            Comedy: event.target.checked,
        });
    }

    onAventureChanges(event) {
        this.setState({
            Aventure: event.target.checked,
        });
    }

    onDramaChanges(event) {
        this.setState({
            Drama: event.target.checked,
        });
    }

    render() {
        return (
            <div>
                <Form inline onSubmit={(e) => e.preventDefault()}>
                    <Button className="pl-0" color="link" onClick={this.toggle}>Advanced Search</Button>
                </Form>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Advanced Search</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Movie Genre</Label>
                                <div>
                                    <CustomInput type="checkbox" id="actionCheckbox" label="Action"
                                        onChange={this.onActionChanges} checked={this.state.Action} />
                                    <CustomInput type="checkbox" id="comedyCheckbox" label="Comedy"
                                        onChange={this.onComedyChanges} checked={this.state.Comedy} />
                                    <CustomInput type="checkbox" id="aventureCheckbox" label="Aventure"
                                        onChange={this.onAventureChanges} checked={this.state.Aventure} />
                                    <CustomInput type="checkbox" id="fictionCheckbox" label="Fiction"
                                        onChange={this.onFictionChanges} checked={this.state.Fiction} />
                                    <CustomInput type="checkbox" id="dramaCheckbox" label="Drama"
                                        onChange={this.onDramaChanges} checked={this.state.Drama} />
                                </div>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.applyFilters}>Apply</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps,
    {
        fetchMovies
    }
)(Filter);