import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './Movies.css'

export default function Movies({ movies, loggedIn, isBurgerOpened, onClickBurger }) {
    return (
        <>
            <Header themePurple={false} loggedIn={loggedIn} isBurgerOpened={isBurgerOpened} onClickBurger={onClickBurger} />
            <main className="movies">
                <SearchForm/>
                <MoviesCardList movies={movies}/>
            </main>
            <Footer />
        </>
    );
}