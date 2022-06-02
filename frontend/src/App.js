import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Images from "./components/Images";
import Footer from "./components/Footer";
import SplashBlurb from "./components/SplashBlurb";
import ImageInput from "./components/ImageInput";
import Albums from "./components/Albums";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
      <Route exact path='/'>
        <SplashBlurb />
      </Route>
      <Route exact path='/create-image'>
        <ImageInput />
      </Route>
      <Route exact path='/explore'>
        <Albums />
      </Route>
      <Footer />
      {/* <Images /> */}
    </>
  );
}

export default App;
