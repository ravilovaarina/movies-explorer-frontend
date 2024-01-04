import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx';
import moviesData from '../../utils/movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import NotFound from '../NotFound/NotFound.jsx';

function App() {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false)
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  function onClickBurger(isBurgerOpened) {
    setIsBurgerOpened(!isBurgerOpened);
  }

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  useEffect(() => {
    setSavedMovies(moviesData.filter((movie) => {
      return movie.saved
    }))
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path='/'
          exact
          element={
            <Main
              isBurgerOpened={isBurgerOpened}
              loggedIn={false}
              onClickBurger={onClickBurger}
            />}
        />
        <Route
          path='/movies'
          exact
          element={
            <Movies
              movies={movies}
              isBurgerOpened={isBurgerOpened}
              loggedIn={true}
              onClickBurger={onClickBurger}
            />}
        />
        <Route
          path='/saved-movies'
          exact
          element={
            <SavedMovies
              savedMovies={savedMovies}
              isBurgerOpened={isBurgerOpened}
              loggedIn={true}
              onClickBurger={onClickBurger}
            />} />
        <Route
          path='/profile'
          exact
          element={<Profile
            isBurgerOpened={isBurgerOpened}
            loggedIn={true}
            onClickBurger={onClickBurger}
          />}
        />
        <Route
          path='/signup'
          exact
          element={<Register />} />
        <Route
          path='/signin'
          exact
          element={<Login />} />
        <Route
          path='/*'
          element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
