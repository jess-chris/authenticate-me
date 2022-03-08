import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <div className="main-content">

        {isLoaded && (
          <Switch>
            <Route exact path="/">
              <div id="bg-text-content">
                <h1>Find your inspiration.</h1>
                <h3>Join the Flickr community, home to tens of billions of photos and 2 million groups.</h3>
                <button id="fp-signup-btn">Sign Up</button>
              </div>
            </Route>
            <Route path="/signup">
              <div id="signup-card">
                <SignupFormPage />
              </div>
            </Route>
          </Switch>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
