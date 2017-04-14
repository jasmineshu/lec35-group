/** Copyright 2017
 * @author      Graham Hemingway <graham.hemingway@gmail.com>
 */

const initialState = {
    comments: [],
    status: 200
};

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COMMENT:REQUEST':
            return Object.assign({}, state, {
                comments: action.comments,
                status: action.status
            });
        case 'COMMENT:SUCCEED':
            return Object.assign({}, state, {
                comments: action.comments,
                status: 'Succeed'
            });
        case 'COMMENT:ERROR':
            return Object.assign({}, state, {
                comments: action.comments,
                status: 'Error'
            });
        case 'COMMENT:SEND':
            return Object.assign({}, state, {
                comments: action.comments,
                status: action.status
            });
        default:
            return state;
    }
};
