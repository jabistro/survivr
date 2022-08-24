import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import SplashBlurb from "./components/SplashBlurb";
import ImageDetail from "./components/ImageDetail";
import About from "./components/About";
import AlbumInput from "./components/AlbumInput";
import AlbumImages from "./components/AlbumImages";
import HiddenImmunityIdol from "./components/HiddenImmunityIdol";
import UserImages from "./components/UserImages";
import UserAlbums from './components/UserAlbums';
import OthersImages from './components/OthersImages';
import OthersAlbums from './components/OthersAlbums';
import LoginForm from "./components/LoginFormModal/LoginForm";
import * as sessionActions from "./store/session";
import { getImages } from "./store/images";
import { getAlbums } from "./store/albums";
import { getComments } from "./store/comments";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch])

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch])

  useEffect(() => {
    dispatch(getAlbums());
  }, [dispatch])

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <SplashBlurb />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/users/:userId/images">
            <UserImages />
          </Route>
          <Route exact path="/users/:userId/albums">
            <UserAlbums />
          </Route>
          <Route exact path="/explore/images">
            <OthersImages />
          </Route>
          <Route exact path="/explore/albums">
            <OthersAlbums />
          </Route>
          <Route exact path='/image/:imageId'>
            <ImageDetail />
          </Route>
          <Route exact path='/create-album' >
            <AlbumInput />
          </Route>
          <Route exact path='/users/:userId/albums'>
            <UserAlbums />
          </Route>
          <Route exact path='/users/:userId/albums/:albumId/images'>
            <AlbumImages />
          </Route>
          <Route exact path='/about' >
            <About />
          </Route>
          <Route exact path='/hidden-idol'>
            <HiddenImmunityIdol />
          </Route>
        </Switch>
      )}
      {/* <Footer /> */}
    </>
  );
}

export default App;
