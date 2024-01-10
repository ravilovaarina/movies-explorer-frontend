
import './NotFound.css'

export default function NotFound({ onGoBackClick }) {

    function handleGoBack() {
        onGoBackClick()
    }
    return (
        <main>
            <section className="notfound">
                <div className="notfound__container">
                    <div className="notfound__text-container">
                        <h1 className="notfound__text">404</h1>
                        <p className="notfound__caption">Страница не найдена</p>
                    </div>
                    <button
                        className="notfound__go-back"
                        onClick={handleGoBack}
                        type="button"
                    >
                        Назад
                    </button>
                </div>
            </section>
        </main>
    )
}