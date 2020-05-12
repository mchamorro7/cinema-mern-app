import React, { Component } from 'react';
import {
    Card, CardImg, CardBody, CardTitle
} from 'reactstrap'

/**
 * Component for display movie.
 * @component
 * @example
 * <Movie key={movie.name} name={movie.name}></Movie>
 */
class Movie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: props.name
        }
    }

    render() {
        return (
            <Card className="w-25 p-2 my-1">
                <CardImg top width="100%" src="https://via.placeholder.com/150" alt="Card image cap" />
                <CardBody className="p-1 text-center">
                    <CardTitle>{this.state.title}</CardTitle>
                </CardBody>
            </Card>
        );
    }
}

export default Movie;