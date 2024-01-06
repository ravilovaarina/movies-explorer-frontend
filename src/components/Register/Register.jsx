import logo from '../../images/logo.svg';
import { useEffect } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import useFormValidator from '../../hooks/ValidateForm';

export default function Register() {
    const { isValid, values, errors, resetForm, handleChange } = useFormValidator();

    function handleSubmit(e) {
        e.preventDefault();
    }

    useEffect(() => {
        resetForm();
    }, [resetForm])

    return (
        <>
            <section className="signup">
                <div className="signup__container">
                    <Link to="/" className="signup__logo">
                        <img src={logo} alt="Логотип" />
                    </Link>
                    <h1 className="signup__greeting">Добро пожаловать!</h1>
                    <form className="signup__form" onSubmit={handleSubmit} noValidate>
                        <label className="signup__label">
                            <span className="signup__label-text">Имя</span>
                            <input
                                name='name'
                                type="text"
                                value={values.name || ''}
                                className={`signup__input ${errors.email && 'signup__input_error'}`}
                                onChange={handleChange}
                                required
                                placeholder='Имя'
                                minLength='2'
                                maxLength='30'
                            />
                            <span className="signup__error">{errors.name || ' '}</span>
                        </label>
                        <label className="signup__label">
                            <span className="signup__label-text">E-mail</span>
                            <input
                                name='email'
                                type="email"
                                className={`signup__input ${errors.name && 'signup__input_error'}`}
                                onChange={handleChange}
                                value={values.email || ''}
                                required
                                placeholder='Почта'
                            />
                            <span className="signup__error">{errors.email || ' '}</span>
                        </label>
                        <label className="signup__label">
                            <span className="signup__label-text">Пароль</span>
                            <input
                                name='password'
                                type="password"
                                className={`signup__input ${errors.password && 'signup__input_error'}`}
                                onChange={handleChange}
                                value={values.password || ''}
                                required
                                placeholder='Пароль'
                            />
                            <span className="signup__error">{errors.password || ' '}</span>
                        </label>
                        <button
                            type='submit'
                            className="signup__submit"
                            disabled={!isValid}
                        >Зарегистрироваться</button>
                        <span className="signup__text">
                            Уже зарегистрированы?&nbsp;
                            <Link to='/signin' className='signup__link'> Войти</Link>
                        </span>
                    </form>
                </div>
            </section>
        </>
    )
}