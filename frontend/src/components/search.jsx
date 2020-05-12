import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import Filter from './filter';
import { fetchMovies } from '../redux/actions/findMovies'
import { connect } from 'react-redux';

/**
 * Component to filter movies depending on the name.
 * @component
 */
class Search extends Component {
    state = {
        match: ''
    };

    constructor(props) {
        super(props);

        this.onSearchChanged = this.onSearchChanged.bind(this);
        this.onKeyPressed = this.onKeyPressed.bind(this);
    }

    onSearchChanged(event) {
        this.setState({
            match: event.target.value
        });
    }

    onKeyPressed(event) {
        if (event.key === "Enter") {
            // Name that contains the input value
            const params = [{ name: { $regex: this.state.match, $options: "i" } }];
            this.props.fetchMovies(params);
        }
    }

    render() {
        return (
            <div className="col-md-8 mx-auto">
                <Form onSubmit={e => { e.preventDefault(); }}>
                    <FormGroup className="m-0">
                        <Input
                            type="search"
                            name="search"
                            id="search"
                            placeholder="Search for movies"
                            onChange={this.onSearchChanged}
                            onKeyPress={this.onKeyPressed}
                            value={this.state.match}
                        />
                    </FormGroup>
                </Form>
                <Filter></Filter>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps,
    {
        fetchMovies
    }
)(Search);