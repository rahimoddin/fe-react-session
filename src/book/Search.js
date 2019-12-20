import React from 'react'


class Search extends React.Component {

    constructor(props) {
        super(props)
        this.changeHandler = this.changeHandler.bind(this)
    }
    changeHandler() {
        this.props.onSearch(this.refs.searchRef.value);
    }

    render() {
        return(
            // <form onSubmit={(e)=>this.submitHandler(e)}>
            //     <input type="text" ref="bookRef"></input>
            //     <input type="submit" value="Search"></input>
            // </form>
            <input type="text" ref="searchRef" onChange={this.changeHandler}></input>
        )
    }
}

export default Search;