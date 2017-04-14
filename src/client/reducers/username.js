/** Copyright 2017
 * @author      Graham Hemingway <graham.hemingway@gmail.com>
 */
const initialState = {
    username: '',
    color: 'red'
};

export const usernameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERNAME:REQUEST':
            return Object.assign({}, state, {
                username: action.username,
                color: 'blue'
            });
        case 'USERNAME:ACCEPT':
            return Object.assign({}, state, {
                username: action.username,
                color: 'green'
            });
        case 'USERNAME:ERROR':
            return Object.assign({}, state, {
                username: action.username,
                color: 'red'
            });
        default:
            return state;
    }
};