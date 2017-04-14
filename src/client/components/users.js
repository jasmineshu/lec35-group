/** Copyright 2017
 * @author      Graham Hemingway <graham.hemingway@gmail.com>
 */
import React, { Component }         from 'react';
import { connect }                  from 'react-redux';
import { usersRequest }             from '../actions/users';


const User = ({username}) => <li>{username}</li>;

export class Users extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(usersRequest());
    }

    render() {
        const users = this.props.users.map((username, index) => {
            return <User key={index} username={username}/>
        });
        return <div className="users">
            <h4>Users:</h4>
            <ul>
                {users}
            </ul>
        </div>;
    }
}

export default connect(state => ({
    users: state.users.users,
    status: state.users.status
}))(Users);