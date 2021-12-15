
import './App.css';
import Content from './components/content';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './home';





function App() {
  
  return (
    <Router>
    
    console.log("hello"),
    <div className="App">
    <Switch>
    <Route exact path="/home">
          <Home /> 
        </Route>
       <Route  exact path="/">
          <Content /> 
        </Route>
        
     </Switch>
    </div>
    </Router>
  );
}

export default App;
