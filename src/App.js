import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Commercial from "./pages/Commercial";
import Home from "./pages/Home";
import Residential from "./pages/Residential";
import Other from "./pages/Other";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/#" component={Home} />
        <Route exact path="/residential" component={Residential} />
        <Route exact path="/commercial" component={Commercial} />
        <Route exact path="/other" component={Other} />
        <Route exact path="/contact" component={Contact} />
      </>
    </Router>
  );
}

export default App;
