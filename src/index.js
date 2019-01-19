import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

const App = props => {
  return (
    <Router>
      <div>
        <div>
          <Link to="/page-1">Page1</Link> <Link to="/page-2">Page2</Link>
        </div>

        <Switch>
          <Route path="/page-1" component={Page1} />
          <Route path="/page-2" component={Page2} />
        </Switch>
      </div>
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
