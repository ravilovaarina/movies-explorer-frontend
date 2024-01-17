import logo from '../../images/logo.svg';
import { useEffect } from 'react';
import './Login.css'
import { Link, Navigate } from 'react-router-dom';
import useFormValidator from '../../hooks/ValidateForm';
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import { useState } from 'react';

export default function Login({ onSubmit, loggedIn, state, isLoading }) {
    const [infoToolTipState, setInfoToolTipState] = useState({
        isOpen: false,
        text: '',
      })
      
      useEffect(()=>{
        setInfoToolTipState(state)
      }, [state]);

      useEffect(()=>{
        setInfoToolTipState({
            isOpen: false,
            text: '',
          })
      }, []);

    const { isValid, values, errors, resetForm, handleChange } = useFormValidator();

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({
            email: values.email,
            password: values.password,
        })
    }

    useEffect(() => {
        resetForm();
    }, [resetForm])

    if (loggedIn) {
        return <Navigate to='/movies' replace />;
    }

    return (
        <>
            <section className="signin">
                <div className="signin__container">
                    <Link to="/" className="signin__logo">
                        <img src={logo} alt="Логотип" />
                    </Link>
                    <h1 className="signin__greeting">Рады видеть!</h1>
                    <form className="signin__form" onSubmit={handleSubmit} noValidate>
                        <label className="signin__label">
                            <span className="signin__label-text">E-mail</span>
                            <input
                                name='email'
                                type="email"
                                className={`signin__input ${errors.name && 'signin__input_error'}`}
                                onChange={handleChange}
                                value={values.email || ''}
                                placeholder='Почта'
                                required
                                disabled={isLoading}
                            />
                            <span className="signin__error">{errors.email || ''}</span>
                        </label>
                        <label className="signin__label">
                            <span className="signin__label-text">Пароль</span>
                            <input
                                name='password'
                                type="password"
                                className={`signin__input ${errors.password && 'signin__input_error'}`}
                                onChange={handleChange}
                                value={values.password || ''}
                                placeholder='Пароль'
                                required
                                disabled={isLoading}
                            />
                            <span className="signin__error">{errors.password || ''}</span>
                        </label>
                        <InfoToolTip state={infoToolTipState} />
                        <button
                            type='submit'
                            className={!isValid ? "signin__submit signin__submit_disabled" : "signin__submit"}
                            disabled={!isValid}
                        >Войти</button>
                        <span className="signin__text">
                            Ещё не зарегистрированы?&nbsp;
                            <Link to='/signup' className='signin__link'> Регистрация</Link>
                        </span>
                    </form>
                </div>
            </section>
        </>
    )
}