import { useCallback, useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import './MoviesCardList.css'

export default function MoviesCardList({movies}) {
    const location = useLocation();

    const [screenWidth, setScreenWidth] = useState(
        document.documentElement.clientWidth
    );

    const handleResizing = useCallback(() => {
        setScreenWidth(document.documentElement.clientWidth)
    },[setScreenWidth])

    useEffect(() => {
        window.addEventListener('resize', handleResizing);
    }, [handleResizing])

    return (
        <section className="movieslist">
            <ul className="movieslist_list">
                {screenWidth >= 800 &&
                movies
                .slice(0, 12)
                .map((card) => <MoviesCard key={card._id} card={card}/>)
                }
                {screenWidth < 800 && screenWidth > 400 &&
                movies
                .slice(0, 8)
                .map((card) => <MoviesCard key={card._id} card={card}/>)
                }
                {screenWidth <= 400 &&
                movies
                .slice(0, 5)
                .map((card) => <MoviesCard key={card._id} card={card}/>)
                }
            </ul>
            {location.pathname === '/movies' && (
                <button className="movieslist__button">Ещё</button>
            )}
        </section>
    )
}