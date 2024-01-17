import './FilterCheckbox.css'
export default function FilterCheckbox({ checkedShort, handleShortMovies }) {
    return (
        <label className="filter">
            <input
            type="checkbox"
            className="filter__checkbox"
            onChange={handleShortMovies}
            checked={checkedShort ? true : false}
            />
            <span className="filter__tumbler"></span>
            <span className="filter__text">Короткометражки</span>
        </label>
    );
}