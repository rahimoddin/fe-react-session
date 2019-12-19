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
        this.removeBook = this.removeBook.bind(this)
        this.deleteBookRef = React.createRef()
    }

    addBook(e) {
        let newbook = this.refs.bookRef.value;
        
        this.setState({
            list: [...this.state.list, newbook]
        })
        this.refs.bookRef.value = '';
    }

    removeBook(book) {
        console.log(book);
        //let book = this.deleteBookRef.current.value;
        let [...newList] = this.state.list;
        let index = newList.indexOf(book);
        if(index>-1) {
            newList.splice(index,1);
            this.setState({
                list: newList
            });
        } else {
            window.alert('No book found by this name')
        }

        //this.deleteBookRef.current.value = '';
    }

    render() {
        return (
            <div>
            <ul>
                {
                    this.state.list.map((item,i)=>{
                    return <li key={i}>{item}<button onClick={()=>this.removeBook(item)}>D</button></li>
                })
                }
            </ul>
            <input type="text" ref="bookRef"/>
            <button onClick={this.addBook}>Add Book</button>

            </div>
        )
    }
}


export default BookList