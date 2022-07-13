import React from "react";

class TeamInfo extends React.Component{
    render(){
        return(
            <div className="team">
                <div className="carte">
                     <h3>{this.props.name}</h3>
                    <img src={this.props.picture} alt="" />
                    <h4 className="stade">Stade : {this.props.stade}</h4>
                    <h5 className="address">Address : {this.props.address}</h5>
                    <h5 className="phone">Phone : {this.props.phone}</h5>
                    <h5 className="date">Founding date : {this.props.founded}</h5>
                </div>
                
            </div>
        )
    }
}

export default TeamInfo