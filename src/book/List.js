import React from 'react'

const List = (props)=> {
    return(
        <ul>
            {props.books.map((book, i)=>{
                if(book.name.indexOf(props.searchText)=== -1) {
                    return null;
                } else {
                    return <li key={i}>{book.name}<span>${book.price}</span></li>
                }
            })}
        </ul>
    )
}

export default List;
