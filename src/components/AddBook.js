import React, { Component } from 'react';

import uuid from 'uuid';

import './addBook.css';
export default class AddBook extends Component {
	constructor() {
		super();

		this.state = {
			newBook: {}
		}
	}

	static defaultProps = {
		authors: [
			'Author 1',
			'Author 2',
			'Author 3'
		]
	}

	handleSubmit(e) {
		e.preventDefault();
		
		if(!this.refs.title.value) {
			console.log('Title is required');
		} else {
			this.setState({
				newBook: {
					title: this.refs.title.value,
					author: this.refs.authors.value,
					id: uuid.v4()
				}
			}, () => {
				this.props.addBook(this.state.newBook);
			});
		}
	}

	render() {
		let authorOptions = this.props.authors.map(author => {
			return <option key={author} value={author}>{author}</option>;
		});

		return (
			<div className={this.props.showAddBookDialog ? ['addBook addBook--visible'] : ['addBook']}>
				<div className="addBook__header">
					<h3 className="addBook__title">Add Book</h3>
				</div>
				<div className="addBook__wrapper">
					<form onSubmit={this.handleSubmit.bind(this)}>
						<div className="addBook__formGroup">
							<label className="addBook__label">Title</label>
							<input className="addBook__input" type="text" ref="title" />
						</div>
						<div className="addBook__formGroup">
							<label className="addBook__label">Author</label>
							<select ref="authors" className="addBook__select">
								{authorOptions}
							</select>
						</div>
						<div className="addBook__btnBar">
							<button className="addBook__btn addBook__btn--secondary" onClick={this.props.handleShowAddBookDialog}>Cancel</button>
							<button className="addBook__btn" type="submit" value="Submit">Add</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}
