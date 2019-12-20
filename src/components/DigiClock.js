import React from 'react'

class DigiClock extends React.Component {

    //component initialization
    constructor() {
        super()
        console.log('constructor')
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    //rendering of the component
    render() {
        console.log('render')
        return (
            <div>{this.state.time}</div>
        )
    }

    //
    componentDidMount() {
        console.log('componentDidMount')
        this.timeId = setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()})
        }, 1000);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.timeId)
    }

    
}


export default DigiClock;





