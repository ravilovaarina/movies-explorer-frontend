import './Techs.css'
export default function Techs() {
    return (
        <>
            <section className="techs">
                <div className="techs__container">
                    <h2 className="techs__title">Технологии</h2>
                    <div className="techs__paragraph">
                        <h3 className="techs__paragraph-title">7 технологий</h3>
                        <p className="techs__paragraph-text">
                            На курсе веб-разработки мы освоили технологии, которые применили в
                            дипломном проекте.
                        </p>
                    </div>
                    <ul className="techs__grid">
                        <li className="techs__grid-item">
                            <p className="techs__grid-name">HTML</p>
                        </li>
                        <li className="techs__grid-item">
                            <p className="techs__grid-name">CSS</p>
                        </li>
                        <li className="techs__grid-item">
                            <p className="techs__grid-name">JS</p>
                        </li>
                        <li className="techs__grid-item">
                            <p className="techs__grid-name">React</p>
                        </li>
                        <li className="techs__grid-item">
                            <p className="techs__grid-name">Git</p>
                        </li>
                        <li className="techs__grid-item">
                            <p className="techs__grid-name">Express.js</p>
                        </li>
                        <li className="techs__grid-item">
                            <p className="techs__grid-name">mongoDB</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}