import React from "react";

class TeamInfo extends React.Component{
    render(){
        return(
            <div className="">
                <h3>{this.props.name}</h3>
                <img src={this.props.picture} alt="" />
                <h4>{this.props.stade}</h4>
                <h5>{this.props.address}</h5>
            </div>
        )
    }
}

export default TeamInfo