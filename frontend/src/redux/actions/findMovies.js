import axios from "axios";
import { getFromStorage } from "../../utils/storage";

export function fetchMovies(filters = []) {
    const token = getFromStorage('auth-token');

    return function (dispatch) {
        return axios.post(`http://localhost:4200/api/movies`, { data: filters }, { headers: { 'auth-token': token } })
            .then(({ data }) => {
                // console.log(response.data.movies);
                dispatch(findResults(data));
            }).catch((err) => {
                console.log({ fetchDataError: err });
            });
    };
}

const findResults = (payload) => {
    return {
        type: 'findResults',
        payload: payload
    }
}


