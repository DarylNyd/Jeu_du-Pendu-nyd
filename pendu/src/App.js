
import './App.css';
import Content from './components/content';
import ThemeContextProvider from './theme/theme';


const GOOD_LETTER = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbnéàâêè";




function App() {
  
  return (
    console.log("hello"),
    <div className="App">
      <ThemeContextProvider>
          <Content /> 
      </ThemeContextProvider>
    </div>
   
  );
}

export default App;
