import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Commercial from "./pages/Commercial";
import Home from "./pages/Home";
import Residential from "./pages/Residential";
import Other from "./pages/Other";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth";
import NoMatch from "./pages/NoMatch";
import UserProvider from "./context";


function App() {
  return (
    <UserProvider>
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/#" component={Home} />
            <Route exact path="/residential" component={Residential} />
            <Route exact path="/commercial" component={Commercial} />
            <Route exact path="/other" component={Other} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/administration" component={() => <Auth action="login" />} />
            <Route exact path="/login" component={() => <Auth action="login" />}  />
            <Route exact path="/signup" component={() => <Auth action="signup" />}  />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/NoMatch" component={NoMatch} />

            <Route component={NoMatch} />
          </Switch>
        </>
      </Router>
    </UserProvider>
  );
}

export default App;
