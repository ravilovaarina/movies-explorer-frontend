import './App.css';
import { mainApi } from '../../utils/MainApi.js';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.jsx';
import ProtectedRoute from '../ProtectedRoute/ProtectedRouts.jsx';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isInfoTooltip, setIsInfoTooltip] = useState({
    isOpen: false,
    text: '',
  })
  const aboutProjectRef = useRef(null);
  const navigate = useNavigate()
  const location = useLocation()

  // Функция возвращающая на предыдущюю страницу
  function handleGoBackClick() {
    navigate(-1);
  }

  function handleRegistration({ name, email, password }) {
    mainApi.register({ name, email, password })
      .then((data) => {
        if (data._id) {
          handleAuthorization({ email, password })
        }
      }
      )
      .catch((err) => {
        setIsInfoTooltip({
          isOpen: true,
          text: err,
        })
      })
  }

  function handleAuthorization(data) {
    mainApi.authorize(data)
      .then(jwt => {
        if (jwt) {
          localStorage.setItem('jwt', jwt.token);
          setLoggedIn(true)
          navigate('/movies')
        }
      }
      )
      .catch((err) => {
        setIsInfoTooltip({
          isOpen: true,
          text: err,
        })
      })
  }

  function handleProfile(data) {
    mainApi
      .updateProfile(data)
      .then((newUserData) => {
        setCurrentUser(newUserData);
      })
      .catch(console.error)
  }
  //проверка токена и авторизация пользователя
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    const path = location.pathname;
    if (jwt) {
      mainApi
        .getMe()
        .then((data) => {
          if (data) {
            setLoggedIn(true);
            setCurrentUser(data);
            navigate(path);
          }
        })
        .catch(console.error)
    }
  }, [])

  // получение информации о пользователе
  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getMe()
        .then(res => setCurrentUser(res))
        .catch(console.error)
    }
  }, [loggedIn]);


  // получение сохраненных карточек
  useEffect(() => {
    if (loggedIn && currentUser) {
      mainApi
        .getSavedMovies()
        .then((res) => {
          setSavedMovies(res)
        })
    }
  }, [currentUser, loggedIn])

  // сохранение карточек
  function handleSaveMovies(movie) {
    mainApi
      .saveNewMovie(movie)
      .then(newMovie => setSavedMovies([newMovie, ...savedMovies]))
      .catch(console.error);
  }
  //удаление карточек
  function handleDeleteMovies(movie) {
    const savedMovie = savedMovies.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId
    );
    mainApi
      .deleteSavedMovie(savedMovie._id)
      .then(() => {
        const newMoviesList = savedMovies.filter(m => {
          if (movie.id === m.movieId || movie.movieId === m.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setSavedMovies(newMoviesList);
      })
      .catch((console.error));
  }

  function handleSignOut() {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.clear();
    navigate('/')
  }

  console.log(isInfoTooltip)
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route
            path='/'
            exact
            element={
              <Main
                loggedIn={loggedIn}
                aboutProjectRef={aboutProjectRef}
              />}
          />
          <Route
            path='/movies'
            exact
            element={
              <ProtectedRoute
                component={Movies}
                loggedIn={loggedIn}
                onClickSaveButton={handleSaveMovies}
                onClickDeleteButton={handleDeleteMovies}
                savedMovies={savedMovies}
              />}
          />
          <Route
            path='/saved-movies'
            exact
            element={
              <ProtectedRoute
                component={SavedMovies}
                savedMovies={savedMovies}
                loggedIn={loggedIn}
                onClickSaveButton={handleSaveMovies}
                onClickDeleteButton={handleDeleteMovies}
              />} />
          <Route
            path='/profile'
            exact
            element={
              <ProtectedRoute
                component={Profile}
                loggedIn={loggedIn}
                onSignOut={handleSignOut}
                handleProfile={handleProfile}
              />}
          />
          <Route
            path='/signup'
            exact
            element={<Register state={isInfoTooltip} onSubmit={handleRegistration} />} />
          <Route
            path='/signin'
            exact
            element={<Login onSubmit={handleAuthorization} />} />
          <Route
            path='/*'
            element={<NotFound onGoBackClick={handleGoBackClick} />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

