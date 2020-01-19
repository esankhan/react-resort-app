import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Aboutus from "./pages/Aboutus";
import ResortState from "./context/ResortState";
function App() {
  return (
    <ResortState>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/rooms/' exact component={Rooms} />
            <Route path='/rooms/:slug' exact component={SingleRoom} />
            <Route path='/about-us' exact component={Aboutus} />
            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    </ResortState>
  );
}

export default App;
