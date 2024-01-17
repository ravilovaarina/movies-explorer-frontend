import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import './MoviesCard.css'
export default function MoviesCard({ card, onClickSaveButton, onClickDeleteButton, isCardSaved  }) {
    const location = useLocation()
    const hours = Math.floor(card.duration / 60)
    const minutes = card.duration % 60

    const handleOnClick = () => {
        onClickSaveButton(card);

    }
    const handleDeleteCard = () => {
        onClickDeleteButton(card);
    }

    return (
        <li className="card">
            <div className="card__container">
                <div className="card__description">
                    <h2 className="card__title">{card.nameRU}</h2>
                    <p className="card__caption">{`${hours} часов ${minutes} минут`}</p>
                    {location.pathname === "/movies" && (
                        <button
                            type='button'
                            className={`card__save-button card__save-button_type_${!isCardSaved ? 'save' : 'saved'}`}
                            onClick={!isCardSaved ? handleOnClick : handleDeleteCard}
                        ></button>
                    )}
                    {location.pathname === "/saved-movies" && (
                        <button onClick={handleDeleteCard} className="card__save-button card__save-button_type_unsave"></button>
                    )}
                </div>
                <a target="_blank" rel="noreferrer" href={card.trailerLink}>
                <img src={location.pathname === '/movies' ? `https://api.nomoreparties.co/${card.image.url}` : card.image} alt="Постер фильма" className="card__image" />
                </a>
            </div>
        </li>
    )
}