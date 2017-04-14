/** Copyright 2017
 * @author      Graham Hemingway <graham.hemingway@gmail.com>
 */
const initialState = {
    users: [],
    status: ''
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERS:REQUEST':
            return Object.assign({}, state, {
                users: action.users,
            });
        case 'USERS:SUCCEED':
            return Object.assign({}, state, {
                users: action.users,
                status: 'SUCCEED'
            });
        case 'USERS:ERROR':
            return Object.assign({}, state, {
                status: 'ERROR'
            });
        default:
            return state;
    }
};
