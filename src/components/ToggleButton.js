import React from 'react'



class ToggleButton extends React.Component {

    constructor() {
        super()
        this.state = {selected: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            selected: !this.state.selected
        })

        
    }

    render() {
        //console.log('toggled: ', this.state.selected)
        //const classes = this.state.selected ? "selected": ""
        return (
            <button onClick={this.handleClick} className={'btn '+ (this.state.selected ? "selected": "")}>Clic Me</button>
        )
    }
}


export default ToggleButton;








