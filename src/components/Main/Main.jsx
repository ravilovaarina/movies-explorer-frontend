import React from "react";
import './Main.css'
import AboutProject from "../AboutProject/AboutProject";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";

const Main = ({isBurgerOpened, loggedIn, onClickBurger}) => {
  return (
    <>
      <Header themePurple={true} loggedIn={loggedIn} isBurgerOpened={isBurgerOpened} onClickBurger={onClickBurger}/>
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio/>
      </main>
      <Footer />
    </>
  );
};

export default Main;