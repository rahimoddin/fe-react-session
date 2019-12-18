import React from 'react'
import Layout from './Layout'


const Header = (props) => {
    return (
        <Layout>
            <div>
                {props.children}
                <ul>
                <li>Home</li>
                <li>Contact Me</li>
                <li>About Me</li>
            </ul>
            </div>
        </Layout>
    )
}
// class Header extends React.Component {
    
//     render() {
        // return <div>
        //     {this.props.children}
        //     <ul>
        //     <li>Home</li>
        //     <li>Contact Me</li>
        //     <li>About Me</li>
        // </ul>
        // </div>
//     }
// }

export default Header;