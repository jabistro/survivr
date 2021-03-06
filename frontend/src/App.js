import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SplashBlurb from "./components/SplashBlurb";
import ImageDetail from "./components/ImageDetail";
import ImageInput from "./components/ImageInput";
import MyAlbums from "./components/UserAlbums";
import About from "./components/About";
import EditImageForm from "./components/EditImage";
import AlbumInput from "./components/AlbumInput";
import EditAlbumForm from "./components/EditAlbum";
import AlbumImages from "./components/AlbumImages";
import HiddenImmunityIdol from "./components/HiddenImmunityIdol";

// import You from './components/You';
import UserImages from "./components/UserImages";
import UserAlbums from './components/UserAlbums';
// import Explore from './components/Explore';
import OthersImages from './components/OthersImages';
import OthersAlbums from './components/OthersAlbums';

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
      {/* <Navbar /> */}
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <SplashBlurb />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
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
          <Route exact path='/create-image'>
            <ImageInput />
          </Route>
          <Route exact path='/explore'>
            <MyAlbums />
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
      <Footer />
      {/* <Images /> */}
    </>
  );
}

export default App;
