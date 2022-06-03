import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Images from "./components/Images";
import Footer from "./components/Footer";
import SplashBlurb from "./components/SplashBlurb";
import ImageDetail from "./components/ImageDetail";
import ImageInput from "./components/ImageInput";
import Albums from "./components/Albums";
import EditImageForm from "./components/EditImage";
import AlbumInput from "./components/AlbumInput";
import EditAlbumForm from "./components/EditAlbum";

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
          <Route exact path='/'>
            <SplashBlurb />
          </Route>
          <Route exact path='/create-image'>
            <ImageInput />
          </Route>
          <Route exact path='/explore'>
            <Images />
          </Route>
          <Route exact path='/image/:imageId'>
            <ImageDetail />
          </Route>
          <Route exact path='/image/edit/:imageId'>
            <EditImageForm />
          </Route>
          <Route exact path='/album/edit/:albumId'>
            <EditAlbumForm />
          </Route>
          <Route exact path='/create-album' >
            <AlbumInput />
          </Route>
          <Route exact path='/users/:userId/albums'>
            <Albums />
          </Route>
        </Switch>
      )}
      <Footer />
      {/* <Images /> */}
    </>
  );
}

export default App;
