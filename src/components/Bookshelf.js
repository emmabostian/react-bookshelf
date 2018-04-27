import React, { Component } from 'react';

import Book from './Book';

import './bookshelf.css';

export default class Bookshelf extends Component {
	deleteBook(id) {
		this.props.onDelete(id);
	}

	render() {
		let books = [];
		if(this.props.books) {
			books = this.props.books.map((book, index) => {
				return (
					<Book 
						book={book} 
						key={index}
						onDelete={this.deleteBook.bind(this)}
					/>
				)
			});
	}

	return (
		<div className="bookshelf">
			<h1 className="bookshelf__title">My Bookshelf</h1>
			<div className="bookshelf__books">
				{books}
			</div>
		</div>
	);
	}
}