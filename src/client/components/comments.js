/** Copyright 2017
 * @author      Graham Hemingway <graham.hemingway@gmail.com>
 */
import React, { Component }         from 'react';
import { connect }                  from 'react-redux';
import { commentsRequest }          from '../actions/comments';


const Comment = ({comment}) => {
    return <li>
        <span>{comment.username}: </span>
        <span>{comment.text}</span>
        </li>;
};

export class Comments extends Component {
    componentDidMount() {
        this.props.dispatch(commentsRequest());
    }

    render() {
        const comments = !this.props.comments.error ? this.props.comments : [{ username: 'Server', text: this.props.comments.error }];
        const components = comments.map((comment, index) => {
            return <Comment key={index} comment={comment}/>
        });
        return <ul className="comments">
            {components}
        </ul>;
    }
}

export default connect(state => ({
    comments: state.comments.comments,
    status: state.comments.status
}))(Comments);