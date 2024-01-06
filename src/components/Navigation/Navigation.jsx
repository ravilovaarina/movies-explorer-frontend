import { Link, NavLink } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";
import './Navigation.css'

export default function Navigation({ loggedIn, onClickBurger, isBurgerOpened, themePurple }) {
    const navigationLink = `navigation__link_theme_${themePurple ? 'purple' : 'white'}`
    const navigationLinkBurger = `navigation__link_place_${isBurgerOpened && 'burger'}`
    const activeLink = `navigation__link_active_${isBurgerOpened ? 'mobile' : 'desktop'}`
    const accountLink = `navigation__link_type_account_${themePurple && 'green'}`
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
                    <div className={`navigation__list navigation__list_loggedIn navigation__list_state_${isBurgerOpened ? 'opened' : 'closed'}`}>
                        <ul className="navigation__movies">
                            {isBurgerOpened && (
                                <li className="navigation__link-item">
                                    <NavLink exact to="/" className={({ isActive }) =>
                                        isActive ? `navigation__link ${navigationLink} ${activeLink} ${navigationLinkBurger}` : `navigation__link ${navigationLink} ${navigationLinkBurger}`}>
                                        Главная
                                    </NavLink>
                                </li>
                            )}
                            <li className="navigation__link-item">
                                <NavLink to="/movies" className={({ isActive }) =>
                                    isActive ?
                                        `navigation__link ${navigationLink} ${activeLink} ${navigationLinkBurger}` :
                                        `navigation__link ${navigationLink} ${navigationLinkBurger}`}>
                                    Фильмы
                                </NavLink>
                            </li>
                            <li className="navigation__link-item">
                                <NavLink to="/saved-movies" className={({ isActive }) =>
                                    isActive ?
                                        `navigation__link ${navigationLink} ${navigationLinkBurger} ${activeLink}` :
                                        `navigation__link ${navigationLink} ${navigationLinkBurger}`}>
                                    Сохранённые фильмы
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="navigation__account">
                            <li className="navigation__link-item">
                                <NavLink to="/profile" className={({ isActive }) =>
                                    isActive ?
                                        `navigation__link navigation__link_type_account ${navigationLinkBurger} ${accountLink} ${navigationLink} ${activeLink}`
                                        : `navigation__link navigation__link_type_account ${navigationLinkBurger} ${accountLink} ${navigationLink}`}>
                                    Аккаунт
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            )}
        </>
    )
}