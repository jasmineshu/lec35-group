/** Copyright 2017
 * @author      Graham Hemingway <graham.hemingway@gmail.com>
 */

// actions for getting comments (for display purposes)
export const commentsRequest = (username) => {
    return {
        type: 'COMMENTS:REQUEST',
        username: username //can only request comments if valid user
        // no comments here, ony returned on commentSucceed
    }
};

export const commentsSucceed = () => { //middleware: you may need to coordinate request w/ succeed/error actions??
    return {
        type: 'COMMENTS:SUCCEED',
        comments: comments
    }
};

export const commentsError = () => {
    return {
        type: 'COMMENTS:ERROR',
        error: 'This is a comments error'
    }
};


// actions for submitting a comment
export const commentPost = (username, comment) => {
    return {
        type: 'COMMENT:POST',
        username: username,
        comment: comment
    }
};
