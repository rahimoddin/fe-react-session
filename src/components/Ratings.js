import React from 'react'
import Star from './Star';

class Ratings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedStars: 0
        }
    }

    handleStarClick(index) {
        // console.log('star clicked ', index)
        this.setState({
            selectedStars: index+1
        })
    }

    render() {
        return (
            <div className="rating">
                {
                    Array(this.props.numStars).fill('').map((item, i)=> {
                        return <Star selected={i<this.state.selectedStars} starClick={()=>this.handleStarClick(i)}></Star>
                    })
                }
            </div>
        )
    }

}

export default Ratings;

