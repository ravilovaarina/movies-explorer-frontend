import { SHORT_MOVIE_DURATION } from "./constants";

function findMovies(movies, userQuery){
    return movies.filter((movie) => {
        const movieRU = String(movie.nameRU).toLowerCase().trim();
        const movieEN = String(movie.nameEN).toLowerCase().trim();
        const userMovie = userQuery.toLowerCase().trim();
        return movieRU.indexOf(userMovie) !== -1 || movieEN.indexOf(userMovie) !== -1;
    })
};
function filterShortMovies(moviesFound){
    const shortMoviesFound = moviesFound.filter((movie) => movie.duration <= SHORT_MOVIE_DURATION);
    return shortMoviesFound;
};

function getSavedMovies(list, movie){
    return list.find((item)=>{
        return item.movieId === (movie.id || movie.movieId);
    })

}

export {findMovies, filterShortMovies, getSavedMovies}