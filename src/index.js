import React from 'react'
import ReactDOM from 'react-dom'


// const element = document.createElement('div')
// const txtELement = document.createTextNode('Some string for text node.')

// element.appendChild(txtELement)

// document.getElementById('root').appendChild(element)

// const childElement = React.createElement('h2', {}, 'I am heand')

// const element = React.createElement('div', {id: 'container', className: 'container'}, 'Some text node for react element')

const element = <div className="container"><h2>I am  heading</h2><div className="child">I am child</div></div>

ReactDOM.render(element, document.getElementById('root'))



