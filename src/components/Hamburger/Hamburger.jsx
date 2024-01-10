import './Hamburger.css';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';

export default function Hamburger({ isBurgerOpened, onClickBurger }) {
    const isMobile = useMediaQuery({ query: `(max-width: 800px)` });

    const handleClickBurger = () => {
        onClickBurger(isBurgerOpened);
    }

    useEffect(()=>{
        if (!isMobile){
            onClickBurger(true)
        }
    },[isMobile, onClickBurger])
    return (
        <button type='button' className={`hamburger-button hamburger-button_${isBurgerOpened ? 'opened' : 'closed'}`}
            onClick={handleClickBurger}>
        </button>
    )
}
