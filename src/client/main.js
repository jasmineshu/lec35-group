/** Copyright 2017
 * @author      Graham Hemingway <graham.hemingway@gmail.com>
 */
import React                            from 'react';
import { render }                       from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider }                     from 'react-redux';

import { usernameReducer }              from './reducers/username';
import { usersReducer }                 from './reducers/users';
import { commentsReducer }              from './reducers/comments';

import { usernameMiddleware }           from './middleware/username';
import { usersMiddleware }              from './middleware/users';
import { commentsMiddleware }           from './middleware/comments';

import App                              from './components/app';

const store = createStore(
    combineReducers({
        username: usernameReducer,
        users: usersReducer,
        comments: commentsReducer
    }),
    applyMiddleware(usernameMiddleware, usersMiddleware, commentsMiddleware)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('primary')
);