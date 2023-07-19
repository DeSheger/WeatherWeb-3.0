import { useState } from "react";
import { useDispatch } from "react-redux";
import Typewriter from "../tools/Typewriter";
import { Link } from "react-router-dom";

const SearchForm = () => {
    const [typedCity, setTypedCity] = useState(String);

    const dispatch: Function = useDispatch();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    return (
        <form className="searchForm">
            <h2 className="searchForm-text"><Typewriter text="Search weather for your city :" speed={200} /></h2>
            <input className="searchForm-input" type="text" value={typedCity} onChange={
                (e) => onChangeHandler(e)
            } />
            <li className="searchForm-button"><Link to="/current" onClick={() => onClickHandler()}>Search</Link></li>
        </form>
    )
}

export default SearchForm;