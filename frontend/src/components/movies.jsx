import React, { Component } from 'react';
import Movie from './movie';

import { connect } from 'react-redux';
import { fetchMovies } from '../redux/actions/findMovies';

import MoviePagination from './pagination';

/**
 * Component for list all the movies that match with the search filter.
 * @component
 */
class Movies extends Component {
    state = {
        currentPage: 1
    }

    componentDidMount() {
        this.props.fetchMovies();

    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState({ currentPage: 1 });
        }
    }

    render() {

        // Get current movies
        const moviesPerPage = 4;
        const indexOfLastMovie = this.state.currentPage * moviesPerPage;
        const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
        const currentMovies = this.props.movieCollection.slice(indexOfFirstMovie, indexOfLastMovie);

        /**
         * Update page number.
         * @param {*} pageNumber 
         */
        const paginate = (pageNumber) => { this.setState({ currentPage: pageNumber }) };

        return (
            <div className="col-md-8 mx-auto d-flex flex-wrap justify-content-center">
                {currentMovies ? currentMovies.map(movie => (
                    <Movie key={movie.name} name={movie.name}></Movie>
                ))
                    :
                    <div className="center">Loading movies...</div>}

                <div className="row my-2 d-flex justify-content-start w-100">
                    <MoviePagination
                        moviesPerPage={moviesPerPage}
                        totalMovies={this.props.movieCollection.length}
                        paginate={paginate}
                    />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    movieCollection: state.movies.movieCollection
});
export default connect(
    mapStateToProps,
    {
        fetchMovies
    }
)(Movies);