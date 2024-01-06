import webLogo from '../../images/web-logo.svg'


import './Promo.css'
export default function Promo({ aboutProjectRef }) {

    function handleClickAnchor(targetRef) {
        targetRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

    return (
        <>
            <section className="promo">
                <div className="promo__container">
                    <div className="promo__about-project">
                        <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                        <p className="promo__caption">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                        <button
                        type='button'
                        className="promo__more"
                        onClick={() => handleClickAnchor(aboutProjectRef)}>
                            Узнать больше
                        </button>
                    </div>
                    <img src={webLogo} alt="логотип веб" className="promo__logo" />
                </div>
            </section>
        </>
    )
}