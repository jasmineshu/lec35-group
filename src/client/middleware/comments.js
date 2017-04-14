/** Copyright 2017
 * @author      Graham Hemingway <graham.hemingway@gmail.com>
 */
import {}      from '../actions/comments';

const pollInterval = 1000;

export const commentsMiddleware = ({getState, dispatch}) => next => action => {

    if (action.type === 'COMMENTS:REQUEST') {
        let valid = true;
        fetch(`/v1/comments`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                // All went well
                if (res.ok) return;
                // Something bad happened
                res.json().then(err => {
                    valid = false;
                    dispatch(commentsError(err));
                });
            })
            .then(() => {
                if (valid) {
                    // Put username into localStorage
                    // Dispatch and move on
                    dispatch(commentsSuccess());
                    setTimeout(dispatch(commentsRequest()), pollInterval);
                }
            })
            .catch(err => {
                console.log('COMMENTS Network Error');
                console.log(err);
            });
    }

    if (action.type === 'COMMENT:POST') {
        let valid = true;
        fetch(`/v1/comments`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: action.comment})
        })
            .then(res => {
                // All went well
                if (res.ok) return;
                // Something bad happened
                res.json().then(err => {
                    valid = false;
                    dispatch(commentsError(err));
                });
            })
            .then(() => {
                if (valid) {
                    // Put username into localStorage
                    // Dispatch and move on
                    dispatch(commentsSuccess());
                }
            })
            .catch(err => {
                console.log('COMMENTS Network Error');
                console.log(err);
            });
    }
    next(action);
};