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
				<button onClick={hideAddBookDialog}>X</button>
				<h3>Add Book</h3> 
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div>
						<label>Title</label><br />
						<input type="text" ref="title" />
					</div>
					<div>
						<label>Author</label><br />
						<select ref="authors">
							{authorOptions}
						</select>
					</div>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		)
	}
}
