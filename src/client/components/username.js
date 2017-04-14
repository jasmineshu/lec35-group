/** Copyright 2017
 * @author      Graham Hemingway <graham.hemingway@gmail.com>
 */

import React, { Component }         from 'react';
import { connect }                  from 'react-redux';
import { usernameRequest }          from '../actions/username';

class Username extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username
        };
        this.onSet = this.onSet.bind(this);
        this.onKeypress = this.onKeypress.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(ev) {
        this.setState({ username: ev.target.value });
    }

    onKeypress(ev) {
        if (ev.key === 'Enter') this.onSet();
    }

    onSet() {
        if (this.state.username !== '') {
            this.props.dispatch(usernameRequest(this.state.username));
        }
    }

    componentDidMount() {
        this.focus.focus();
    }

    render() {
        const disabled = this.state.username === '';
        return <div className="username">
            <span> Chatting as: </span>
            <input
                ref={obj => {this.focus = obj;}}
                style={{ color: this.props.color}}
                name="username"
                value={this.state.username}
                placeholder="Username"
                onChange={this.onChange}
                onKeyPress={this.onKeypress}
            />
            <button disabled={disabled} onClick={this.onSet}>Set</button>
        </div>;
    }
}

export default connect(state => ({
    username: state.username.username,
    color: state.username.color
}))(Username);