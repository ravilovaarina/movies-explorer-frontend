import './Portfolio.css'
export default function Portfolio() {
    return (
        <>
            <div className="portfolio">
                <div className="portfolio__container">
                    <p className="portfolio__title">Портфолио</p>
                    <ul className="portfolio__links">
                        <li className="portfolio__projects-item">
                            <a href="https://github.com/ravilovaarina/how-to-learn" className="portfolio__link">Статичный сайт</a>
                        </li>
                        <li className="portfolio__projects-item">
                            <a href="https://github.com/ravilovaarina/russian-travel" className="portfolio__link">Адаптивный сайт</a>
                        </li>
                        <li className="portfolio__projects-item">
                            <a href="https://github.com/ravilovaarina/react-mesto-api-full-gha?tab=readme-ov-file" className="portfolio__link">Одностраничное приложение</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}