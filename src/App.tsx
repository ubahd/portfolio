import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Portfolio from "./components/portfolio/Portfolio";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
