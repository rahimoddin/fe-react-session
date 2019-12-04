import React from 'react'
import ReactDOM from 'react-dom'


class Cart extends React.Component {


    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        //console.log('Cart:: props: ', this.props)
    }

    render() {
        return(<section>
        <h2>My Cart</h2>
        <div>
            <div>Cart body</div>
            <div>{`Total of the cart is ${this.props.total} and items added: ${this.props.count}`}</div>
            <div>Items in cart</div>
            <ul>
                {this.props.items.map((item)=>{
                    return <li>{item}</li>
                })}
            </ul>
        </div>
        </section>)
    }
}
class Header extends React.Component {
    
    render() {
        return <div>
        <img src=""></img>
            <ul>
            <li>Home</li>
            <li>Contact Me</li>
            <li>About Me</li>
        </ul>
        </div>
    }
}
class App extends React.Component {
    render() {
        return <div>
        <h1>My Shopping Application</h1>
        <Header></Header>
        <Cart total={10023} count={3} items={["shoes", "Tshirt", "Cap"]}></Cart>
        </div>
    }
} 
ReactDOM.render(<App></App>, document.getElementById('root'))





