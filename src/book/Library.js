import React from 'react'
import AddBook from './AddBook'
import List from './List'
import Search from './Search'

class Library extends React.Component {

    constructor() {
        super()
        this.state = {
            books: [
                {name: "C", price: 200, isbn: 1234, author: 'XYZ', instock: false},
                {name: "Java", price: 200, isbn: 1234, author: 'XYZ', instock: true},
                {name: "Python", price: 300, isbn: 1234, author: 'ABC', instock: true},
                {name: "ReactC", price: 200, isbn: 1234, author: 'PQR', instock: false}
            ],
            search: '',
        }
        this.addBook = this.addBook.bind(this)
        this.searchBooks = this.searchBooks.bind(this)
    }


    addBook(book) {
        this.setState({
            books: [...this.state.books, book]
        })
    }

    searchBooks(text) {
        this.setState({
            search: text
        })
    }

    render() {
        return(
            <div>
                <Search onSearch={this.searchBooks}></Search>
                <List books={this.state.books} searchText={this.state.search}></List>
                <AddBook onSubmitBook={this.addBook}></AddBook>
            </div>
        )
    }
}


export default Library;









