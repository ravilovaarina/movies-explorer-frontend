import './AboutMe.css'
import myPicture from '../../images/myPicture.png'
export default function AboutMe() {
    return (
        <>
            <section className="aboutMe">
                <div className="aboutMe__container">
                    <h2 className="aboutMe__title">Студент</h2>
                    <div className="aboutMe__me">
                        <div className="aboutMe__me-info">
                            <h3 className="aboutMe__name">Арина</h3>
                            <p className="aboutMe__caption">Фронтенд-разработчик, 17 лет</p>
                            <p className="aboutMe__text">
                                Я родилась и живу в Москве. Пока что у меня нет ниакого образования.
                                В этом году я заканчиваю школу и поступаю в университет(аминь). Я люблю смореть фильмы и заниматься спортом.
                                В десятом классе я решила, что сдавать ЕГЭ и учиться на фронтенд-разработчика - отличная идея. Так я тут и оказалась.
                            </p>
                            <a
                                href="https://github.com/ravilovaarina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="aboutMe__github-link">
                                Github
                            </a>
                        </div>
                        <img src={myPicture} alt="фотография фронтенд-рфзработчика" className="aboutMe__my-picture" />
                    </div>
                </div>
            </section>
        </>
    )
}