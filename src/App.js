import React, { Component } from 'react';
import './App.css';

import Bookshelf from './components/Bookshelf';
import AddBook from './components/AddBook';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }

  componentWillMount() {
    this.setState({
      books: [
        {
          title: "Book 1",
          author: "Author 1"
        },
        {
          title: "Book 2",
          author: "Author 2"
        },
        {
          title: "Book 3",
          author: "Author 3"
        }
      ]
    });
  }

  handleAddBook(newBook) {
    this.setState({
      books: [
        ...this.state.books,
        newBook
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <Bookshelf books={this.state.books}/>
        <AddBook addBook={this.handleAddBook.bind(this)}/>
      </div>
    );
  }
}

export default App;
