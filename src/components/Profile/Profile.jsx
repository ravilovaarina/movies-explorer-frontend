import { useEffect, useState, useContext } from "react";
import useFormValidator from "../../hooks/ValidateForm";
import Header from "../Header/Header";
import './Profile.css'
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Profile({ loggedIn, onSignOut, handleProfile }) {
    const [isBeingEdited, setIsBeingEdited] = useState(false);
    const { isValid, values, errors, resetForm, handleChange } = useFormValidator();
    const navigate = useNavigate();
    const currentUser = useContext(CurrentUserContext);

    function handleEditClick() {
        setIsBeingEdited(!isBeingEdited);
    }
    function handleSubmit(e) {
        e.preventDefault();
        handleProfile(values);
        setIsBeingEdited(!isBeingEdited);
    }
    useEffect(() => {
        if (currentUser){
            resetForm(true, currentUser, {})
        }
    }, [resetForm])

    const isFullyValid = (!isValid || !(currentUser.name === values.name && currentUser.email === values.email));
    
    return (
        <>
            <Header themePurple={false} loggedIn={loggedIn}/>
            <main className="main">
                <section className="profile">
                <form className="profile__form" name="profile" noValidate onSubmit={handleSubmit}>
                    <h1 className="profile__greeting">{`Привет, ${currentUser.name || ''}!`}</h1>
                    <div className="profile__inputs">
                        <label className="profile__lable">
                            <span className="profile__input-text">Имя</span>
                            <input
                                name="name"
                                type="text"
                                className="profile__input"
                                placeholder="Имя"
                                required
                                onChange={handleChange}
                                value={values.name || ''}
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
                                placeholder="Почта"
                                required
                                onChange={handleChange}
                                value={values.email || ''}
                                disabled={isBeingEdited ? false : true}
                            />
                            <span className="profile__error">{errors.email || ''}</span>
                        </label>
                    </div>
                    <button className={`
                        ${isBeingEdited ? 'profile__save-bttn profile__save-bttn_shown' : 'profile__save-bttn profile__save-bttn_hidden'}
                        ${isValid ? 'profile__save-bttn profile__save-bttn_valid' : 'profile__save-bttn profile__save-bttn_invalid'}`}
                        disabled={isFullyValid ? false : true}
                    >Сохранить
                    </button>
                </form>
                <div className={`profile__buttons ${isBeingEdited && 'profile__buttons_status_being-edited'}`}>
                    <button type="submit"
                        className={`profile__button profile__button-edit ${!isValid && 'profile__button-edit_disabled'
                            }`}
                        disabled={!isValid}
                        onClick={handleEditClick}
                    >Редактировать
                    </button>
                    <button type="button" className="profile__button profile__button-signout" onClick={onSignOut}>Выйти из аккаунта</button>
                </div>
                </section>
            </main>
        </>
    )
}