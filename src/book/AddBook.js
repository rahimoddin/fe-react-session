import React from 'react'


class AddBook extends React.Component {


    submitHandler(e) {
        e.preventDefault();
        let book = {name: this.refs.bookRef.value, price: 200, isbn: 1234, author: 'XYZ', instock: false}
        
        this.props.onSubmitBook(book);
        this.refs.bookRef.value = '';
    }

    render() {
        return(
            <form onSubmit={(e)=>this.submitHandler(e)}>
                <input type="text" ref="bookRef"></input>
                <input type="submit" value="Add Book"></input>
            </form>
        )
    }
}

export default AddBook;
