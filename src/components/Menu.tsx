import { Link } from "react-router-dom";


function Menu(props: any) {

    return (
        <div className="menu">
            <ul className="menu__list">
                {props.up ? <li className="menu__list-up">
                    <Link to="/home">
                        <div className="menu__list-upButton"></div>
                    </Link>
                </li> : null}
                {props.down ? <li className="menu__list-down">
                    <Link to="/weekly">
                        <div className="menu__list-downButton"></div>
                    </Link>
                </li> : null}
            </ul>
        </div>
    )
}

export default Menu;