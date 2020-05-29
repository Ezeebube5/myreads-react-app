import React, { Component } from 'react';
import BookList from '../components/BookList';

export default class AddBooksPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
        this.onTermChange = this.onTermChange.bind(this);
    }

    onTermChange = (term) => {
            this.setState(() => ({
                searchTerm: term.trim()
            }))
        this.props.bookSearchHandler(term.trim());
    }

    updateBookShelf = (book, shelf) => {
        this.props.updateBookHandler(book, shelf);
    }

    render() {
        const {books, onReturnHome} =this.props;
        return (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={onReturnHome}>
                Close
              </button>

              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search for books by title or author"
                  onChange={(event) => this.onTermChange(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <BookList books={books} onClickUpdate={this.updateBookShelf} />
            </div>
          </div>
        );
    }
}
