/** Copyright 2017
 * @author      Graham Hemingway <graham.hemingway@gmail.com>
 */

import React, { Component }         from 'react';
import { connect }                  from 'react-redux';
import { commentPost }              from '../actions/comments';

class PostEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onKeypress = this.onKeypress.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(ev) {
        this.setState({ text: ev.target.value });
    }

    onKeypress(ev) {
        if (ev.key === 'Enter') this.onSubmit();
    }

    onSubmit() {
        if (this.state.text !== '') {
            this.props.dispatch(commentPost(this.state.text));
            this.setState({ text: '' });
            this.focus.focus();
        }
    }

    render() {
        const disabled = this.state.username === '';
        return <div className="entry">
            <input
                ref={obj => {this.focus = obj;}}
                style={{ color: this.props.color}}
                name="text"
                value={this.state.text}
                placeholder="Comment"
                onChange={this.onChange}
                onKeyPress={this.onKeypress}
            />
            <button disabled={disabled} onClick={this.onSubmit}>Send</button>
        </div>;
    }
}

export default connect(state => ({}))(PostEntry);