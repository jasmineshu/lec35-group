/** Copyright 2017
 * @author      Graham Hemingway <graham.hemingway@gmail.com>
 */
import { usernameAccept, usernameError }    from '../actions/username';
import { commentsRequest }                  from '../actions/comments';

export const usernameMiddleware = ({ getState, dispatch }) => next => action => {
    if (action.type === 'USERNAME:REQUEST') {
        let valid = true;
        fetch(`/v1/user`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: action.username })
        })
            .then(res => {
                // All went well
                if (res.ok) return;
                // Something bad happened
                res.json().then(err => {
                    valid = false;
                    dispatch(usernameError(err));
                });
            })
            .then(() => {
                if(valid) {
                    // Put username into localStorage
                    localStorage.setItem('username', action.username);
                    // Dispatch and move on
                    dispatch(usernameAccept());
                    dispatch(commentsRequest());
                }
            })
            .catch(err => {
                console.log('USERNAME Network Error');
                console.log(err);
            });
    }
    next(action);
};