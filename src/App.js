import React from "react";
import './App.css'
import teams from './teams.json'
import TeamInfo from "./components/TeamInfo";

class App extends React.Component{
  render(){
    return(
      <>
      {teams.map(team => {
        return(
          // team.shortName,
          // team.crestUrl,
          // team.venue,
          // team.address,
          // team.email,
          // team.phone,
          // team.founded
          <TeamInfo
            name = {team.name}
            picture = {team.crestUrl}
            stade = {team.venue}
            address = {team.address}
            />
        )
      })}
      </>
    )
  }
}

export default App