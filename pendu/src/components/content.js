import React, { useContext } from "react";
import Button from "./Button";
let ThemeContext
  export default function Content () {
      const {theme} = useContext(ThemeContext);
      const fetchData = async () => {
          fetch(`https://animalfinderapi.herokuapp.com/word`)
          _then(response => response.json())
          _then(json => console.log(json.data));
      }
      return (
          <div className={theme ? 'contenu light ' : ' contenu dark'}>
              <h1>Trouver d'animaux</h1>
              <p>Trouve dont l'animal cachés</p>
              {theme}
              <Button value={'Change word'} onClick={() => fetchData()}/>
          </div>
      )
  }