import './Techs.css'
export default function Techs() {
    return (
        <>
            <div className="techs">
                <div className="techs__container">
                    <h3 className="techs__title">Технологии</h3>
                    <div className="techs__paragraph">
                        <h3 className="techs__paragraph-title">7 технологий</h3>
                        <p className="techs__paragraph-text">
                            На курсе веб-разработки мы освоили технологии, которые применили
                            в дипломном проекте.
                        </p>
                    </div>
                    <div className="techs__grid">
                        <div className="techs__grid-item">
                            <p className="techs__grid-name">HTML</p>
                        </div>
                        <div className="techs__grid-item">
                            <p className="techs__grid-name">CSS</p>
                        </div>
                        <div className="techs__grid-item">
                            <p className="techs__grid-name">JS</p>
                        </div>
                        <div className="techs__grid-item">
                            <p className="techs__grid-name">React</p>
                        </div>
                        <div className="techs__grid-item">
                            <p className="techs__grid-name">Git</p>
                        </div>
                        <div className="techs__grid-item">
                            <p className="techs__grid-name">Express.js</p>
                        </div>
                        <div className="techs__grid-item">
                            <p className="techs__grid-name">mongoDB</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}