import React from "react";
import './components/content.css'
import Button1 from "./components/button1";




  export default function Home () {
    
  
      
    
      return (
          <div className="App-header" >
              <Button1 value={'Change mode'} />
              <h1>Animal Finder</h1>
              <h3>Lets Play the "Jeu du Pendu</h3>
              <p>Click on the button to play</p>
              <Button1 value={'Change mode'} />
              
            
          </div>
      )
  }