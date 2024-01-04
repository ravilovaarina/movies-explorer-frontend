import webLogo from '../../images/web-logo.svg'
import './Promo.css'
export default function Promo(){
    return(
        <>
        <div className="promo">
            <div className="promo__container">
                <div className="promo__about-project">
                    <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                    <p className="promo__caption">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <a href="" className="promo__more">Узнать больше</a>
                </div>
                <img src={webLogo} alt="логотип веб" className="promo__logo" />
            </div>
        </div>
        </>
    )
}