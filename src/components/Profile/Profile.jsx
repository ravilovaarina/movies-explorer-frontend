import { useEffect, useState } from "react";
import useFormValidator from "../../hooks/ValidateForm";
import Header from "../Header/Header";
import './Profile.css'

export default function Profile({ isBurgerOpened, loggedIn, onClickBurger }) {
    const [isBeingEdited, setIsBeingEdited] = useState(false);
    const { isValid, values, errors, resetForm, handleChange } = useFormValidator();

    function handleEditClick() {
        setIsBeingEdited(!isBeingEdited);
        console.log(isBeingEdited)
    }
    function handleSubmit(e) {
        e.preventDefault();
        setIsBeingEdited(!isBeingEdited);
    }

    useEffect(() => {
        resetForm();
    }, [resetForm])
    return (
        <>
            <Header themePurple={false} loggedIn={loggedIn} isBurgerOpened={isBurgerOpened} onClickBurger={onClickBurger} />
            <main className="profile">
                <form className="profile__form" name="profile" noValidate onSubmit={handleSubmit}>
                    <h2 className="profile__greeting">Привет, Виталий!</h2>
                    <div className="profile__inputs">
                        <label className="profile__lable">
                            <span className="profile__input-text">Имя</span>
                            <input
                                name="name"
                                type="text"
                                className="profile__input"
                                placeholder="имя"
                                required
                                onChange={handleChange}
                                value={values.name || 'Виталя'}
                                minLength='2'
                                maxLength='30'
                                disabled={isBeingEdited ? false : true}
                            />
                            <span className="profile__error">{errors.name || ''}</span>
                        </label>
                        <label className="profile__lable">
                            <span className="profile__input-text">Почта</span>
                            <input
                                name="email"
                                type="email"
                                className="profile__input"
                                placeholder="почта"
                                required
                                onChange={handleChange}
                                value={values.email || 'vitlyaTheGreatest@GOAT.com'}
                                disabled={isBeingEdited ? false : true}
                            />
                            <span className="profile__error">{errors.email || ''}</span>
                        </label>
                    </div>
                    <button className={`
                        ${isBeingEdited ? 'profile__save-bttn_shown' : 'profile__save-bttn_hidden'}
                        ${isValid ? 'profile__save-bttn_valid' : 'profile__save-bttn_invalid'}`}
                        disabled={isValid ? false : true}
                        >Сохранить
                        </button>
                </form>
                <div className={`profile__buttons ${isBeingEdited && 'profile__buttons_status_being-edited'
                    }`}>
                    <button type="button"
                        className={`profile__button profile__button-edit ${!isValid && 'profile__button-edit_disabled'
                            }`}
                        disabled={!isValid}
                        onClick={handleEditClick}
                    >Редактировать
                    </button>
                    <button className="profile__button profile__button-signout">Выйти из аккаунта</button>
                </div>
            </main>
        </>
    )
}