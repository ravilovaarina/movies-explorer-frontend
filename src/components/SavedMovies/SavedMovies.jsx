import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './SavedMovies.css';
import { filterShortMovies, findMovies } from "../../utils/utils";
import { useState } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useEffect } from "react";
import InfoToolTip from "../InfoToolTip/InfoToolTip";

export default function SavedMovies({ savedMovies, loggedIn, onClickSaveButton, onClickDeleteButton}) {
    const currentUser = useContext(CurrentUserContext);
    const [checkedShort, setCheckedShort] = useState(false);
    const [noResult, setNoResult] = useState(false);
    const [searchResult, setSearchResult] = useState(savedMovies);
    const [moviesShown, setMoviesShown] = useState(searchResult);
    const [isInfoTooltip, setIsInfoTooltip] = useState({
        isOpen: false,
        successful: null,
        text: '',
    });

    function handleSearchInSavedMovies(userQuery) {
        const savedMovieList = findMovies(savedMovies, userQuery, checkedShort);
        if (savedMovieList.length === 0) {
            setIsInfoTooltip({
                isOpen: true,
                text: 'Ничего не найдено.',
            });
            setNoResult(true);
        } else {
            setNoResult(false);
            setSearchResult(savedMovieList);
            setMoviesShown(savedMovieList)
        }
    }

    function handleShortMovies() {
        if (!checkedShort) {
            setCheckedShort(true);
            localStorage.setItem(`${currentUser.email} - checkedShortSavedMovies`, true);
            setSearchResult(filterShortMovies(moviesShown));
            filterShortMovies(moviesShown).length === 0 ? setNoResult(true) : setNoResult(false);
        } else {
            setCheckedShort(false);
            localStorage.setItem(`${currentUser.email} - checkedShortSavedMovies`, false);
            moviesShown.length === 0 ? setNoResult(true) : setNoResult(false);
            setSearchResult(moviesShown);
        }
        localStorage.setItem(`${currentUser.email} - checkedShortSavedMovies`, !checkedShort)
    }

    useEffect(()=>{
        if((localStorage.getItem(`${currentUser.email} - checkedShortSavedMovies`)) === 'true'){
            setCheckedShort(true);
            setSearchResult(filterShortMovies(savedMovies));
        } else {
            setCheckedShort(false);
            setSearchResult(savedMovies);
        }
    },[savedMovies, currentUser]);

    useEffect(()=>{
        setMoviesShown(savedMovies);
        savedMovies.length !== 0 ? setNoResult(false) : setNoResult(true);
    }, [savedMovies]);


    return (
        <>
            <Header themePurple={false} loggedIn={loggedIn} />
            <main className="savedMovies">
                <SearchForm onSearchSubmit={handleSearchInSavedMovies} handleShortMovies={handleShortMovies} checkedShort={checkedShort}/>
                <InfoToolTip state={isInfoTooltip} />
                {!noResult && (
                    <MoviesCardList movies={searchResult} onClickSaveButton={onClickSaveButton} savedMovies={savedMovies} onClickDeleteButton={onClickDeleteButton}/>
                )}
            </main>
            <Footer />
        </>
    );
}