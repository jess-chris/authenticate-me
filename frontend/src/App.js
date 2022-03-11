import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import UploadImage from "./components/UploadImage";
import SingleImage from "./components/SingleImage";
import ImageScroll from "./components/ImageScroll";
import Albums from "./components/Albums";
import SingleAlbum from "./components/SingleAlbum";

import { fetchImages } from "./store/imageReducer";
import CreateAlbum from "./components/CreateAlbum";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const sessionUser = useSelector(state => state.session.user);
  const imagesObject = useSelector((state) => state.imageState.entries);
  const images = Object.values(imagesObject);


  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(fetchImages());
  }, [dispatch]);



  return (
    <>
      {!sessionUser && isLoaded && (
        <Switch>
          <Route exact path="/">
            <div className="splash-cont">
              <Navigation isLoaded={isLoaded} />
              <div className="splash">
                <div id="bg-text-content">
                  <h1>Find your inspiration.</h1>
                  <h3>Join the Flimg community, home to tens of billions of photos and 2 million groups.</h3>
                  <a href="/signup">
                    <button id="fp-signup-btn">Start for free</button>
                  </a>
                </div>
              </div>
              <ImageScroll images={images}/>
            </div>
          </Route>
        </Switch>
      )}

      {sessionUser && isLoaded && (
        <Switch>

          <Route exact path="/">
            <NavBar sessionUser={sessionUser}/>
            <div className="main-content fix-height">
              <MainContent />
            </div>
          </Route>

          <Route path="/images/new">
            <NavBar sessionUser={sessionUser}/>
            <div className="fix-height" id="new-image-card">
              <UploadImage sessionUser={sessionUser}/>
            </div>
          </Route>

          <Route path='/images/:id'>
            <NavBar sessionUser={sessionUser}/>
            <SingleImage sessionUser={sessionUser}/>
          </Route>

          <Route exact path='/albums'>
            <NavBar sessionUser={sessionUser}/>
            <div className="main-content fix-height">
              <Albums sessionUser={sessionUser}/>
            </div>  
          </Route>

          <Route path='/albums/new'>
            <NavBar sessionUser={sessionUser}/>
            <div className="fix-height" id="new-album-card">
              <CreateAlbum sessionUser={sessionUser}/>
            </div>  
          </Route>

          <Route path='/albums/:id'>
            <NavBar sessionUser={sessionUser}/>
            <SingleAlbum sessionUser={sessionUser} />
          </Route>

        </Switch>
      )}
      <Switch>
        <Route path="/signup">
          <NavBar sessionUser={sessionUser} />
          <div className="fix-height" id="signup-card">
            <SignupFormPage />
          </div>
        </Route>
        
        <Route path="/login">
          <NavBar sessionUser={sessionUser} />
          <div className="fix-height" id="login-card">
            <LoginFormPage />
          </div>
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
