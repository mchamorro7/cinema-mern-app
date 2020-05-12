import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducerMovies } from "./reducers/reducerMovies";
import { reducerUser } from "./reducers/reducerUser";

// Middleware to fetch data
import thunk from "redux-thunk";

export default createStore(combineReducers({
    movies: reducerMovies,
    user: reducerUser
}), applyMiddleware(thunk));

