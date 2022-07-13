import React from "react";
import './App.css'
import teams from './teams.json'
import TeamInfo from "./components/TeamInfo";
import Counter from "./components/Counter";

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      count: 1
    }
  }

  handleButtonPlus = () => {
    this.setState({count: this.state.count + 1})
    }
  
    handleButtonMinus = () => {
      if(this.state.count > 1){
        this.setState({count: this.state.count - 1})
      }
    }

  render(){
    return(
      <>
      <Counter 
        count={this.state.count} 
        increment={this.handleButtonPlus} 
        substract={this.handleButtonMinus}
        />

      
      {
      
      teams.filter((team, i) => {
        return i <= this.state.count - 1
      })
      .map(team => {
        return(
          <TeamInfo
            name = {team.shortName}
            picture = {team.crestUrl}
            stade = {team.venue}
            address = {team.address}
            phone = {team.phone}
            founded = {team.founded}
            />
        )
      })}
      </>
    )
  }
}

export default App