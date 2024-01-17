import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './Movies.css'
import { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { moviesApi } from "../../utils/MoviesApi";
import { filterShortMovies, findMovies } from "../../utils/utils";
import InfoToolTip from "../InfoToolTip/InfoToolTip";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";

export default function Movies({ loggedIn, onClickSaveButton, onClickDeleteButton, savedMovies }) {
    const currentUser = useContext(CurrentUserContext);
    const [allMovies, setAllMovies] = useState([]);
    const [noResult, setNoResult] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [checkedShort, setCheckedShort] = useState(false);
    const [moviesShown, setMoviesShown] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isInfoTooltip, setIsInfoTooltip] = useState({
        isOpen: false,
        text: '',
    })
    //чекбокс
    function handleShortMovies() {
        setCheckedShort(!checkedShort);
        if (!checkedShort) {
            setSearchResult(filterShortMovies(moviesShown));
        } else {
            setSearchResult(moviesShown);
        }
        localStorage.setItem(`${currentUser.email} - checkedShort`, !checkedShort)
    }

    // сабмит поиска
    function onSearchSubmit(userQuery) {
        localStorage.setItem(`${currentUser.email} - userQuery`, userQuery);
        localStorage.setItem(`${currentUser.email} - checkedShort`, checkedShort);
        if (allMovies.length === 0) {
            setIsLoading(true)
            moviesApi
                .getMovies()
                .then((movies) => {
                    setAllMovies(movies);
                    handleSearch(movies, userQuery, checkedShort)
                })
                .catch((err) => {
                     setIsInfoTooltip({
                            isOpen: true,
                            text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
                        })
                }
                )
                .finally(() => setIsLoading(false));
        } else {
            handleSearch(allMovies, userQuery, checkedShort);
        }
    }

    // поиск
    function handleSearch(movies, userQuery, checkedShort) {
        const movieList = findMovies(movies, userQuery, checkedShort);
        if (movieList.length === 0) {
            setIsInfoTooltip({
                isOpen: true,
                text: 'Ничего не найдено',
            })
            setNoResult(true)
        } else {
            setIsInfoTooltip({
                isOpen: false,
                text: '',
            })
            setNoResult(false)
        }
        setMoviesShown(movieList);
        setSearchResult(
             checkedShort ? filterShortMovies(movieList) : movieList
        );
        localStorage.setItem(`${currentUser.email} - movies`, JSON.stringify(movieList));
    }

    // чекбокс из локального хранилища
    useEffect(() => {
        if (localStorage.getItem(`${currentUser.email} - checkedShort`) === 'true') {
            setCheckedShort(true);
        } else {
            setCheckedShort(false);
        }
    }, [currentUser]);

    useEffect(() => {
        if (localStorage.getItem(`${currentUser.email} - movies`)) {
            const movies = JSON.parse(localStorage.getItem(`${currentUser.email} - movies`));
            if (localStorage.getItem(`${currentUser.email} - checkedShort`) === 'true') {
                setSearchResult(filterShortMovies(movies));
            } else {
                setSearchResult(movies);

            }
        }
    }, [currentUser])

    return (
        <>
            <Header themePurple={false} loggedIn={loggedIn} />
            <main className="movies">
                <SearchForm onSearchSubmit={onSearchSubmit} handleShortMovies={handleShortMovies} checkedShort={checkedShort} />
                <Preloader isOpen={isLoading} />
                <InfoToolTip state={isInfoTooltip} />
                {!noResult && (
                    <MoviesCardList
                    movies={searchResult}
                    onClickSaveButton={onClickSaveButton}
                    onClickDeleteButton={onClickDeleteButton}
                    savedMovies={savedMovies}
                    />
                )}
            </main>
            <Footer />
        </>
    );
}