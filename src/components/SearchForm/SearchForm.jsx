import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './SearchForm.css'
import useFormValidator from "../../hooks/ValidateForm";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function SearchForm({onSearchSubmit, checkedShort, handleShortMovies}) {
    const { isValid, values, resetForm, handleChange, setIsValid } = useFormValidator();
    const [queryError, setQueryError] = useState('');
    const location = useLocation();
    const currentUser = useContext(CurrentUserContext)

    function handleSubmit(e) {
        e.preventDefault();
        isValid ? onSearchSubmit(values.search) : setQueryError('Нужно ввести ключевое слово');
    }

    useEffect(() => {
        setQueryError('')
    }, [isValid]);

    useEffect(() => {
        if (localStorage.getItem(`${currentUser.email} - userQuery`) && location.pathname === '/movies'){
            const searchValue = localStorage.getItem(`${currentUser.email} - userQuery`);
            values.search = searchValue;
            setIsValid(true)
        }
    }, [currentUser])
    return (
        <>
            <section className="search">
                <div className="search__container">
                    <form name="search" className="search__form" noValidate onSubmit={handleSubmit} >
                        <input
                            className="search__input"
                            name="search"
                            placeholder='Фильм'
                            type="text"
                            onChange={handleChange}
                            value={values.search || ''}
                            required
                        />
                        <span className="search__error">{queryError}</span>
                        <button className="search__button" type="submit"></button>
                        <FilterCheckbox checkedShort={checkedShort} handleShortMovies={handleShortMovies}/>
                    </form>
                </div>
            </section>
        </>
    )
}