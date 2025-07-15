const initState = {
    isLoggedIn: true,
    token: 1234
}

const authReducer = (state = initState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default authReducer;