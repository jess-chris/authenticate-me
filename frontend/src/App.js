import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);



  return (
    <>
      {!sessionUser && (
        <div className="splash-cont">
          <Navigation isLoaded={isLoaded} />
          <div className="splash">
            <Switch>
              <Route exact path="/">
                <div id="bg-text-content">
                  <h1>Find your inspiration.</h1>
                  <h3>Join the Flimg community, home to tens of billions of photos and 2 million groups.</h3>
                  <button id="fp-signup-btn">Start for free</button>
                </div>
              </Route>
              <Route path="/signup">
                <div id="signup-card">
                  <SignupFormPage />
                </div>
              </Route>
            </Switch>
          </div>
        </div>
      )}
      {sessionUser && (
        <>
          <Navigation isLoaded={isLoaded} />
          <div className="main-content fix-height">
            <MainContent />
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
