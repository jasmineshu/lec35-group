/** Copyright 2017
 * @author      Graham Hemingway <graham.hemingway@gmail.com>
 */

export const usersRequest = (users) => {
    return {
        type: 'USERS:REQUEST',
        users: users
    }
};

export const usersReceive = (users) => {
    return {
        type: 'USERS:SUCCEED',
        users: users,
        data: users
    }
};

export const usersError = () => {
    return {
        type: 'USERS:ERROR',
        error: 'This is an user action error'
    }
};