import React from 'react'
import ReactDOM from 'react-dom'
import Ratings from './components/Ratings'
import './app.css'
import DigiClock from './components/DigiClock'
import Library from './book/Library'

const data = {
    cart: {
        items: [
            {name: "Shoes", price: 200, qty:1},
            {name: "Tshirt", price: 250, qty:1},
            {name: "Trouser", price: 300, qty:1}
        ],
        total: 800
    }
}



class App extends React.Component {

    constructor() {
        super()
        this.state = {
            showClock: false
        }
        this.showHideClock = this.showHideClock.bind(this)
    }

    showHideClock() {
        this.setState({
            showClock: !this.state.showClock
        })
    }


    render() {
        return <div>
        <Library></Library>
        <Ratings numStars={5}></Ratings>
        {this.state.showClock && <DigiClock></DigiClock>}
        <button onClick={this.showHideClock}>Show/Hide Clock</button>
        </div>
    }
} 
ReactDOM.render(<App></App>, document.getElementById('root'))






