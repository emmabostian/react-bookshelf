import React, { Component } from 'react';

export default class Book extends Component {
    render() {
        let book = this.props.book || null;

        return (
            <div>
                <h1>{book && book.title}</h1>
                <h2>{book && book.author}</h2>
            </div>
        )
    }
}
