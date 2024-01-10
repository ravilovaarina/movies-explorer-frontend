import './Portfolio.css'
export default function Portfolio() {
    return (
        <>
            <section className="portfolio">
                <div className="portfolio__container">
                    <p className="portfolio__title">Портфолио</p>
                    <ul className="portfolio__links">
                        <li className="portfolio__projects-item">
                            <a
                                href="https://github.com/ravilovaarina/how-to-learn"
                                className="portfolio__link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Статичный сайт
                            </a>
                        </li>
                        <li className="portfolio__projects-item">
                            <a
                                href="https://github.com/ravilovaarina/russian-travel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="portfolio__link"
                            >
                                Адаптивный сайт
                            </a>
                        </li>
                        <li className="portfolio__projects-item">
                            <a
                                href="https://github.com/ravilovaarina/react-mesto-api-full-gha?tab=readme-ov-file"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="portfolio__link"
                            >
                                Одностраничное приложение
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}