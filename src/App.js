import React, { Component } from 'react';
import './App.css';

import uuid from 'uuid';

import data from './data.json';

import Bookshelf from './components/Bookshelf';
import AddBook from './components/AddBook';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      showAddBookDialog: false
    }
  }

  componentWillMount() {
    let bookData = data.books;

    let bookDataWithIds = bookData.map((book, index) => {
      book.id = uuid.v4();
      return book;
    });

    this.setState({
      books: bookDataWithIds,
      showAddBookDialog: false  
    });
  }

  handleShowAddBookDialog() {
    this.setState({
      showAddBookDialog: !this.state.showAddBookDialog
    }, () => {
      const overlay = document.querySelector('.App__overlay');
      if(this.state.showAddBookDialog) {
        overlay.classList.add('App__overlay--visible');
      } else {
        overlay.classList.remove('App__overlay--visible');
      }
    });
  }

  handleAddBook(newBook) {
    this.setState({
      books: [
        ...this.state.books,
        newBook
      ]
    });
  }

  handleDeleteBook(id) {
    let books = this.state.books;
    let index = books.findIndex(book => book.id === id);
    books.splice(index, 1);
    this.setState({books: books});
  }

  render() {
    return (
      <div className="App">
        <button className="App__addBook"onClick={this.handleShowAddBookDialog.bind(this)}>+ Add Book</button>
        <div className="App__overlay"></div>
        <Bookshelf 
          books={this.state.books}
          onDelete={this.handleDeleteBook.bind(this)}
        />
        <AddBook 
          addBook={this.handleAddBook.bind(this)}
          showAddBookDialog={this.state.showAddBookDialog}
          handleShowAddBookDialog={this.handleShowAddBookDialog.bind(this)}
        />
      </div>
    );
  }
}

export default App;
