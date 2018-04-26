import React, { Component } from 'react';

import Book from './Book';

export default class Bookshelf extends Component {
    render() {
        let books = [];

        if(this.props.books) {
            books = this.props.books.map((book, index) => {
                return (
                    <Book 
                        book={book} 
                        key={index}
                    />
                )
            });

        }

        return (
            <div>
                <h1>My bookshelf</h1>
                {books}
            </div>
        );
    }
}