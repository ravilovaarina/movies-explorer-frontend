import { Link, NavLink } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";
import './Navigation.css'

export default function Navigation({ loggedIn, onClickBurger, isBurgerOpened, themePurple }) {
    const navigationLink = `navigation__link_theme_${themePurple ? 'purple' : 'white'}`
    const activeLink = `navigation__link_active_${isBurgerOpened ? 'mobile' : 'desktop'}`
    return (
        <>
            {!loggedIn ? (
                <nav className="navigation">
                    <div className="navigation__list">
                        <Link to="/signup" className={`navigation__link ${navigationLink}`}>Регистрация</Link>
                        <Link to="/signin" className={`${navigationLink} navigation__link navigation__link_signin`}>Войти</Link>
                    </div>
                </nav>
            ) : (
                <nav className={`navigation navigation_state_${isBurgerOpened ? 'opened' : 'closed'}`}>
                    <Hamburger isBurgerOpened={isBurgerOpened} onClickBurger={onClickBurger} />
                    <ul className={`navigation__list navigation__list_loggedIn navigation__list_state_${isBurgerOpened ? 'opened' : 'closed'}`}>
                        <div className="navigation__movies">
                            {isBurgerOpened && (
                                <li className="navigation__link-item">
                                    <NavLink exact to="/" className={({ isActive }) =>
                                        isActive ? `navigation__link ${navigationLink} ${activeLink}` : `navigation__link ${navigationLink}`}>
                                        Главная
                                    </NavLink>
                                </li>
                            )}
                            <li className="navigation__link-item">
                                <NavLink to="/movies" className={({ isActive }) =>
                                    isActive ?
                                        `navigation__link ${navigationLink} ${activeLink}` :
                                        `navigation__link ${navigationLink}`}>
                                    Фильмы
                                </NavLink>
                            </li>
                            <li className="navigation__link-item">
                                <NavLink to="/saved-movies" className={({ isActive }) =>
                                    isActive ?
                                        `navigation__link ${navigationLink} ${activeLink}` :
                                        `navigation__link ${navigationLink}`}>
                                    Сохранённые фильмы
                                </NavLink>
                            </li>
                        </div>
                        <div>
                            <li className="navigation__link-item">
                                <NavLink to="/profile" className={({ isActive }) =>
                                    isActive ?
                                        `navigation__link navigation__link_type_account ${navigationLink} ${activeLink}`
                                        : `navigation__link navigation__link_type_account ${navigationLink}`}>
                                    Аккаунт
                                </NavLink>
                            </li>
                        </div>
                    </ul>
                </nav>
            )}
        </>
    )
}