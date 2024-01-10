import './FilterCheckbox.css'
export default function FilterCheckbox(){
    return(
        <label className="filter">
            <input type="checkbox" className="filter__checkbox" />
            <span className="filter__tumbler"></span>
            <span className="filter__text">Короткометражки</span>
        </label>
    );
}