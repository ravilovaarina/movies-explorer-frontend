import { useNavigate } from "react-router-dom";
import './NotFound.css'

export default function NotFound() {
    const navigate = useNavigate()

    function handleGoBack() {
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else {
            navigate("/", { replace: true });
        }
    }
    return (
        <div className="notfound">
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
        </div>
    )
}