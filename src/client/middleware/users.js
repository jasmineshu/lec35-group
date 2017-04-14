/** Copyright 2017
 * @author      Graham Hemingway <graham.hemingway@gmail.com>
 */
import {}     from '../actions/users';
//import $ from 'jquery';

const pollInterval = 5000;

export const usersMiddleware = ({ getState, dispatch }) => next => action => {
    if (action.type === 'USERS:REQUEST') {
        // $.get({
        //     url: '/v1/users',
        //     success: (data) => {
        //         dispatch(data);
        //     },
        //     dataType: 'json'
        // })
        fetch(`/v1/users`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
    };
    next(action);
};