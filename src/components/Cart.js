import React from 'react'
import './cart.css'
import Layout from './Layout'

class Cart extends React.Component {


    render() {
        return(<section>
        <Layout>
            <h2>My Cart</h2>
            <div>
                <div className="container">Cart body</div>
                <div>Items in cart</div>
                <ul>
                    {this.props.items.map((item)=>{
                        return <li>{`${item.name}   ${item.price}   ${item.qty}`}</li>
                    })}
                </ul>
                <div>
                    Total Price: {this.props.total}
                </div>
            </div>
        </Layout>
        </section>)
    }
}

export default Cart;