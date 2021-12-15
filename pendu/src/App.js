
import './App.css';
import { useState, useEffect } from 'react'
import {CallApi} from './score'
import Content from './components/content';
import Splash from './theme/splash'
import  { ThemeProvider } from "styled-components";


const GOOD_LETTER = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbnéàâêè";
const LightTheme ={
  pageBackground: "white",
  fontColor:"black"
};

const DarkTheme ={
  pageBackground: "#282c36",
  fontColor:"white"
}; 
 const themes = {
   light:LightTheme,
   dark:DarkTheme,
 }





function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === 'Light' ? setTheme("dark") : setTheme("Light");
  };
  return (
    //<ThemeProvider theme={themes[theme]}>
    //<Splash theme={theme} setTheme={setTheme}>
    <div className="App">
      <header className="App-header">
       <h1>Animal Finder</h1>
       
       <Content />
       
       <p>Classement des Joueurs</p>
       <CallApi></CallApi>
      </header>
    </div>
   // </Splash>
    //</ThemeProvider>
  );
}

export default App;
