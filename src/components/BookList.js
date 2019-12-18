import React from 'react'


class BookList extends React.Component {


    constructor() {
        super()
        this.state = {
            list: [
                "JavaScript", "Python"
            ]
        }

        this.addBook = this.addBook.bind(this)

    }

    addBook(e) {
        let newbook = this.refs.bookRef.value;
        this.setState({
            list: [...this.state.list, newbook]
    })
    }

    render() {
        return (
            <div>
            <ul>
                {
                    this.state.list.map(function(item,i){
                    return <li key={i}>{item}</li>
                })
                }
            </ul>
            <input type="text" ref="bookRef"/>
            <button onClick={this.addBook}/>
            </div>
        )
    }
}


export default BookList