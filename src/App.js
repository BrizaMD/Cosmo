import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/pages/Home";
import Zodiac from "./components/pages/Zodiac";
import Love from "./components/pages/Love";
import Cocktail from "./components/pages/Cocktail";

function App() {
  return (
    <div className="App">
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact >
                    <Home />
                </Route>
                <Route path="/zodiac" exact >
                    <Zodiac />
                </Route>
                <Route path="/love" exact >
                    <Love />
                </Route>
                <Route path="/cocktail" exact >
                    <Cocktail />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
