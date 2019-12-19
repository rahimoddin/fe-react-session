import React from 'react'

const Star = (props)=> {
    return(
        <button onClick={props.starClick} className={props.selected? 'yellow': 'grey'}></button>
    )
}

export default Star;