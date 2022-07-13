import React from "react"

class Counter extends React.Component{
    render(){
        return(
            <div className="count">
                <button className="moins" onClick={this.props.substract}>-</button>
                <h2>{this.props.count}</h2>
                <button className="plus" onClick={this.props.increment}>+</button>
            </div>
        )
    }
}

export default Counter