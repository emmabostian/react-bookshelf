import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Book extends Component {
	deleteBook(id) {
		this.props.onDelete(id);
	}
    
	render() {
		let book = this.props.book || null;
		return (
			<div>
				<h1>{book.title}</h1>
				<img src={book.cover} alt={book.title} />
				<h2>{book.author}</h2>
				<button onClick={this.deleteBook.bind(this, this.props.book.id)}>X</button>
			</div>
		)
	}
}

Book.propTypes = {
	books: PropTypes.array,
	onDelete: PropTypes.func
}
