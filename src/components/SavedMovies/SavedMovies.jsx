import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './SavedMovies.css'

export default function savedMovies({ savedMovies, loggedIn, isBurgerOpened, onClickBurger }) {
    return (
        <>
            <Header themePurple={false} loggedIn={loggedIn} isBurgerOpened={isBurgerOpened} onClickBurger={onClickBurger} />
            <main className="savedMovies">
                <SearchForm/>
                <MoviesCardList movies={savedMovies}/>
            </main>
            <Footer />
        </>
    );
}