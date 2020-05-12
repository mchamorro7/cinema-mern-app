import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

/**
 * Component to paginate movies.
 * @component
 * @example
 * <MoviePagination moviesPerPage={moviesPerPage} totalMovies={movieCollection.length} paginate={paginateFunction} />
 */
const MoviePagination = (props) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.totalMovies / props.moviesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Pagination aria-label="navigation">
            {pageNumbers.map(number => (
                <PaginationItem key={number}>
                    <PaginationLink onClick={() => props.paginate(number)} href=''>{number}</PaginationLink>
                </PaginationItem>
            ))}
        </Pagination>
    );
};

export default MoviePagination;
