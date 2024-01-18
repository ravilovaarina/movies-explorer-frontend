import './InfoToolTip.css'
export default function InfoToolTip({state}){
    return(
        <>
        <div className={`${ state.isOpen && 'tooltip' }`}>
            <h2 className="tooltip__text">{state.text}</h2>
        </div>
        </>
    )
}