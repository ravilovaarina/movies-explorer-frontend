import { useCallback, useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import './MoviesCardList.css'
import { DEVICE_WIDTH } from "../../utils/constants";
import { getSavedMovies } from "../../utils/utils";
import SavedMovies from "../SavedMovies/SavedMovies";
import useScreenWidth from "../../hooks/useScreenWidth";

export default function MoviesCardList({ movies, onClickSaveButton, onClickDeleteButton, savedMovies }) {
    const location = useLocation();
    const [movieList, setMovieList] = useState([]);
    const { desktop, tablet, mobile } = DEVICE_WIDTH;
    const [movieListState, setMovieListState] = useState(desktop.cards);
    const screenWidth = useScreenWidth();

    useEffect(() => {
        if (location.pathname === '/movies') {
            if (screenWidth >= desktop.width) {
                setMovieListState(desktop.cards);
            } else if (screenWidth < desktop.width && screenWidth > mobile.width) {
                setMovieListState(tablet.cards);
            } else {
                setMovieListState(mobile.cards)
            }
        }
    }, [screenWidth, location.pathname, desktop, mobile, tablet])

    useEffect(() => {
        if (movies.length) {
            const result = movies.filter((item, i) => i < movieListState.total)
            setMovieList(result)
        }
    }, [movies, movieListState.total])

    function handleClickMore(){
        const start = movieList.length;
        const end = start + movieListState.more;
        if ((movies.length - start)>0){
            const newList = movies.slice(start, end);
            setMovieList([...movieList, ...newList]);
        }
    }

    return (
        <section className="movieslist">
            <ul className="movieslist__list">
                {movieList.map((card) => (<MoviesCard key={card._id} isCardSaved={getSavedMovies(savedMovies, card)} card={card} onClickDeleteButton={onClickDeleteButton} onClickSaveButton={onClickSaveButton}/>))}
            </ul>
            {location.pathname === '/movies' && movieList.length >= 5 && movieList.length < movies.length && (
                <button type="button" onClick={handleClickMore} className="movieslist__button">Ещё</button>
            )}
        </section>
    )
}