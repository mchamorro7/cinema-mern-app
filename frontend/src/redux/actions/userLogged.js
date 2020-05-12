export const userLogged = (user) => {
    return {
        type: 'userLogged',
        payload: user
    }
}