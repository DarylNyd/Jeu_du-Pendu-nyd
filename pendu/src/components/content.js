import React from "react";
import './content.css'
import CallWord from "../wordapi";
import {CallApi} from '../score';
import react, {useContext} from 'react' ;
import { ThemeContext } from '../../theme/theme';
import Button1 from "./button1";



  export default function Content () {
    
    const {theme} = useContext(ThemeContext);
      
    
      return (
        <div
        className={theme ? 'contenu light' : 'contenu dark'}
        >
            <Button1 value={'DarkMode'} />
              <h1>Animal Finder</h1>
               
              <h2>Trouver d'animaux</h2>
              <p>Trouve dont l'animal cachés</p>
             <p><CallWord></CallWord></p>

              
              

              <p>Classement des Joueurs</p>
       <CallApi></CallApi>
          </div>
      )
  }