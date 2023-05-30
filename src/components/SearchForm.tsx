import { useState } from "react";
import { useDispatch } from "react-redux";
import Typewriter from "../tools/Typewriter";
import { Link } from "react-router-dom";

function SearchForm()
{
    const [typedCity, setTypedCity] = useState(String);

    const dispatch = useDispatch();

    const onChangeHandler = (e: any) => {
        setTypedCity(e.target.value)
    }

    const onClickHandler = () => {
        dispatch({
            type: 'CHANGE_CITY',
            payload: {
                city: typedCity
            }
        })
    }

    return(
        <form className="start__form">
                <h2 className="start__form-text"><Typewriter text="Search weather for your city :" speed={200} /></h2>
                <input className="start__form-input" type="text" value={typedCity} onChange={
                    (e) => onChangeHandler(e)
                } />
                <li className="start__form-button"><Link to="/current" onClick={() => onClickHandler()}>Search</Link></li>
        </form>
    )
}

export default SearchForm;