import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './SearchForm.css'

export default function SearchForm() {
    return (
        <>
            <section className="search">
                <div className="search__container">
                    <form name="search" className="search__form">
                        <input
                            className="search__input"
                            name="search"
                            placeholder='Фильм'
                            type="text"
                            required
                        />
                        <button className="search__button" type="submit"></button>
                    </form>
                    <FilterCheckbox/>
                </div>
            </section>
        </>
    )
}