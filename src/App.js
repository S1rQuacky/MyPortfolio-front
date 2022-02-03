
import './App.css';

//Import Components 
import Header from './components/header';
import Footer from './components/footer';
import { Route, Switch } from "react-router-dom";

//Import Pages
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';

function App() {
  const URL = "https://n-urbina-portfolio.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/projects">
            <Projects URL={URL} />
        </Route>
        <Route path="/about">
            <About URL={URL} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
