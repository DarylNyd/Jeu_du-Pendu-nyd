import React from "react";
import Button from "./Button";
import './content.css'
import CallWord from "../wordapi";



  export default function Content () {
      
    
      return (
          <div >
              <h2>Trouver d'animaux</h2>
              <p>Trouve dont l'animal cachés</p>
             <p><CallWord></CallWord></p>

              
              <Button value={'Change word'} />
          </div>
      )
  }