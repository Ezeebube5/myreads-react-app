import React, { Component } from 'react'
import BookItem from './BookItem'

export default class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }
    
    mapBooks = (books) => {
        if (!books || books.length === 0 || books.error) {
            return (
                <div>
                    No Books found! Try a different query
                </div>
            )
        }
        return (
          <ol className="books-grid">
            {books.map(book => {
                return (
                  <li key={book.id}>
                    <BookItem
                      book={book}
                      onClickUpdate={this.props.onClickUpdate}
                    />
                  </li>
                );
            })}
          </ol>
        );
    } 

    render() {
        const { books } = this.props;
        return <div>{this.mapBooks(books)}</div>;
    }
}
