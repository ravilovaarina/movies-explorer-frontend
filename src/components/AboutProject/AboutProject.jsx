import './AboutProject.css'
export default function AboutProject({ aboutProjectRef }) {
    return (
        <>
            <section className="aboutProject" ref={aboutProjectRef}>
                <div className="aboutProject__container">
                    <h2 className="aboutProject__title">О проекте</h2>
                    <div className="aboutProject__paragraphs">
                        <div className="aboutProject__paragraph">
                            <h3 className="aboutProject__paragraph-title">Дипломный проект включал 5 этапов</h3>
                            <p className="aboutProject__paragraph-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                        </div>
                        <div className="aboutProject__paragraph">
                            <h3 className="aboutProject__paragraph-title">На выполнение диплома ушло 5 недель</h3>
                            <p className="aboutProject__paragraph-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                        </div>
                    </div>
                    <div className="aboutProject__schema">
                        <div className="aboutProject__backend-block">
                            <p className="aboutProject__backend-duration">1 неделя</p>
                            <p className="aboutProject__caption">Back-end</p>
                        </div>
                        <div className="aboutProject__frontend-block">
                            <p className="aboutProject__frontend-duration">4 недели</p>
                            <p className="aboutProject__caption">Front-end</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}