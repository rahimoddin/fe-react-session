import React from 'react'


const Header = (props) => {
    return (
        <div>
            {props.children}
            <ul>
            <li>Home</li>
            <li>Contact Me</li>
            <li>About Me</li>
        </ul>
        </div>
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