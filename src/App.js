import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Education from "./Education";
import Experience from "./Experience";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div class="header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
