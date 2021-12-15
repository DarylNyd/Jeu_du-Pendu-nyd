import React from "react";
import './content.css'
import CallWord from "../wordapi";
import {CallApi} from '../score';
import Button1 from "./button1";




  export default function Content () {
    
  
      
    
      return (
          <div className="App-header" >
              <Button1 value={'Change mode'} />
              <h1>Animal Finder</h1>
               
              <h2>Trouver d'animaux</h2>
              <p>Trouve dont l'animal cachés</p>
             <p><CallWord></CallWord></p>

              
              

              <p>Classement des Joueurs</p>
       <CallApi></CallApi>
          </div>
      )
  }