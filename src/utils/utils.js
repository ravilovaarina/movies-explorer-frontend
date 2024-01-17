function findMovies(movies, userQuery, checkedShort){
    const moviesFound = movies.filter((movie) => {
        const movieRU = String(movie.nameRU).toLowerCase().trim();
        const movieEN = String(movie.nameEN).toLowerCase().trim();
        const userMovie = userQuery.toLowerCase().trim();
        return movieRU.indexOf(userMovie) !== -1 || movieEN.indexOf(userMovie) !== -1;
    })

    if (checkedShort){
        return filterShortMovies(moviesFound)
    } else {
        return moviesFound
    }
};
function filterShortMovies(moviesFound){
    const shortMoviesFound = moviesFound.filter((movie) => movie.duration <= 40);
    return shortMoviesFound;
};

function getSavedMovies(list, movie){
    return list.find((item)=>{
        return item.movieId === (movie.id || movie.movieId);
    })

}

export {findMovies, filterShortMovies, getSavedMovies}