import './Footer.css'
export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__container">
                    <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                    <div className="footer__navigation">
                        <p className="footer__copyright">&copy;2024</p>
                        <div className="footer__links">
                            <a
                                href="https://practicum.yandex.ru/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__link"
                            >
                                Яндекс.Практикум
                            </a>
                            <a
                                href="https://github.com/ravilovaarina"
                                className="footer__link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}