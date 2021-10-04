import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './Commponents/AboutUs/AboutUs';
import Home from './Commponents/Home/Home';
import Services from './Commponents/Services/Services';
import Contact from './Commponents/Contact/Contact';
import NotFound from './Commponents/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Switch>
          <Route exact path="/">
              <Home>
                
              </Home>
          </Route>
          <Route path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
