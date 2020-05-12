// Define reducer initial state
const initialState = {
    userLogged: ''
}

export const reducerUser = (state = initialState, action) => {
    switch (action.type) {
        case "userLogged":
            const response = action.payload;
            return {
                ...state,
                userLogged: response
            };
        default:
            return state
    }
}
