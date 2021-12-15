import React from "react";
import './content.css'
import CallWord from "../wordapi";
import {CallApi} from '../score';




  export default function Content () {
    
  
      
    
      return (
          <div className="App-header" >
              <h1>Animal Finder</h1>
               
              <h2>Trouver d'animaux</h2>
              <p>Trouve dont l'animal cachés</p>
             <p><CallWord></CallWord></p>

              
              

              <p>Classement des Joueurs</p>
       <CallApi></CallApi>
          </div>
      )
  }