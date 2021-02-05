import './App.css'
import {BrowserRouter as Router, Switch,Link,Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
function App() {
  return (
   <Router>
      <div className="App">
      <Switch>
        <Route exact path="/"> 
          <Header/>
          <Home/>
        </Route>
        <Route path="/checkout">
        <h1>Checkout</h1>

        </Route>
        <Route path="/Login">
        <h1>Login</h1>

        </Route> 
        <Header/>
      </Switch>
    </div>
   </Router>
  );
}

export default App;
