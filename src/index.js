import React from 'react'
import ReactDOM from 'react-dom'
import Cart from './components/Cart'
import Header from './components/Header'
import Logo from './components/Logo'
import ToggleButton from './components/ToggleButton'
import BookList from './components/BookList'
import Ratings from './components/Ratings'
import './app.css'

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
    render() {
        return <div>
        <h1>My Shopping Application</h1>
        <Header><Logo></Logo></Header>
        <Cart items={data.cart.items} total={data.cart.total}></Cart>

        <ToggleButton></ToggleButton>
        <BookList></BookList>
        <Ratings numStars={5}></Ratings>
        </div>
    }
} 
ReactDOM.render(<App></App>, document.getElementById('root'))






