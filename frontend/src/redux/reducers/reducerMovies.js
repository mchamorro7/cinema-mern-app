// Define reducer initial state
const initialState = {
    movieCollection: []
}

export const reducerMovies = (state = initialState, action) => {
    switch (action.type) {
        case "findResults":
            const response = action.payload.movies;
            return {
                ...state,
                movieCollection: response
            };
        default:
            return state
    }
}
