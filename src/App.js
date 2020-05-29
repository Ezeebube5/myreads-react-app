import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import HomePage from './pages/HomePage';
import AddBooksPage from './pages/AddBooksPage';
import './App.css';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
    }
    componentDidMount() {
      this.getAllBooks();
    }
  
    getAllBooks = async () => {
      const books = await BooksAPI.getAll();
      this.setState(() => ({ books }));
    }

    updateBookHandler = async (book, shelf) => {
      await BooksAPI.update(book, shelf);
      this.getAllBooks();
    }
  
    bookSearchHandler = async (term) => {
      const books = await BooksAPI.search(term);
      this.setState(() => ({ books }));
    }
  


  render() {
    return (
      <div className="app">
      <Route
        exact
        path="/"
        render={() => (
          <HomePage
            books={this.state.books}
            updateBookHandler={this.updateBookHandler}
          />
        )}
      />

      <Route
        path="/search"
        render={({ history }) => (
          <AddBooksPage
            books={this.state.books}
            bookSearchHandler={this.bookSearchHandler}
            updateBookHandler={this.updateBookHandler}
            onReturnHome={() => {
              this.getAllBooks();
              history.push("/");
            }}
          />
        )}
      />
    </div>
      );
  }
}

export default BooksApp
