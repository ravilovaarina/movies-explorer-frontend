import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import './MoviesCard.css'
export default function MoviesCard({ card }) {
    const location = useLocation()

    const [isCardSaved, setIsCardSaved] = useState(false)

    const handleOnClick = () => {
        setIsCardSaved(!isCardSaved)
    }
    return (
        <li className="card">
            <div className="card__container">
                <div className="card__description">
                    <h2 className="card__title">{card.title}</h2>
                    <p className="card__caption">{card.duration}</p>
                    {location.pathname === "/movies" && (
                        <button
                        type='button'
                        className={`card__save-button card__save-button_type_${!isCardSaved ? 'save' : 'saved'}`}
                        onClick={handleOnClick}
                        ></button>
                    )}
                    {location.pathname === "/saved-movies" && (
                        <button className="card__save-button card__save-button_type_unsave"></button>
                    )}
                </div>
                <img src={card.poster} alt="Постер фильма" className="card__image" />
            </div>
        </li>
    )
}