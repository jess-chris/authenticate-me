import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <div></div>
      <div className="main-content">
        {isLoaded && (
          <Switch>
            <Route path="/signup">
              <div id="signup-card">
                <SignupFormPage />
              </div>
            </Route>
          </Switch>
        )}
      </div>
    </>
  );
}

export default App;
