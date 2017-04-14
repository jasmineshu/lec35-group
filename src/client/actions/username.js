/** Copyright 2017
 * @author      Graham Hemingway <graham.hemingway@gmail.com>
 */

export const usernameRequest = (username) => {
    return {
        type: 'USERNAME:REQUEST',
        username: username
    }
};

export const usernameAccept = (username) => {
    // username = username.replace(/<(?:.|\n)*?>/gm, '');
    // username = username.substr(0, 20);
    return {
        type: 'USERNAME:ACCEPT',
        username: username
    }
};


export const usernameError = () => {
    return {
        type: 'USERNAME:ERROR',
        err: "Somethings is wrong. This is a error message from username action."
    }
}