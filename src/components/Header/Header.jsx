import Navigation from "../Navigation/Navigation";
import logo from '../../images/logo.svg'
import './Header.css'
import { Link } from "react-router-dom";

export default function Header({themePurple, loggedIn, isBurgerOpened, onClickBurger}) {
    return (
        <header className={`header header_color_${themePurple ? 'purple' : 'white'}`}>
            <div className="header__container">
                <Link to="/" className="header__link">
                    <img src={logo} alt="Логотип" />
                </Link>
                <Navigation loggedIn={loggedIn} onClickBurger={onClickBurger} isBurgerOpened={isBurgerOpened} themePurple={themePurple}/>
            </div>
        </header>
    )
}