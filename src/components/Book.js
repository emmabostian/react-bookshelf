import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './book.css';

export default class Book extends Component {
	deleteBook(id) {
		this.props.onDelete(id);
	}
    
	render() {
		let book = this.props.book || null;
		return (
			<div className="book">
				<h1 className="book__title">{book.title}</h1>
				<button className="book__delete" onClick={this.deleteBook.bind(this, this.props.book.id)}>X</button>
				<img className="book__cover" src={book.cover} alt={book.title} />
				<h2 className="book__author">{book.author}</h2>
			</div>
		)
	}
}

Book.propTypes = {
	books: PropTypes.array,
	onDelete: PropTypes.func
}
