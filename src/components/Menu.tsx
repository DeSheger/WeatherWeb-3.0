import { Link } from "react-router-dom";
import Typewriter from "../tools/Typewriter";


const Menu = () => {

    return (
        <div className="menu__sidebar">
                <h1 className="menu__sidebar-logo">
                    <Typewriter text="WeatherWeb-3.0" speed={200} />
                    PIOTR GROSZ 131784
                </h1>

                <ul className="menu__sidebar-list">
                    <li className="menu__sidebar-item"><Link to="/current" >Current</Link></li>
                    <li className="menu__sidebar-item"><Link to="/weekly">Weekly</Link></li>
                    <li className="menu__sidebar-item"><Link to="/map" >Map</Link></li>
                </ul>

                <p className="menu__sidebar-info">
                The website was created for educational purposes. Nice if you share it.
                </p>
        </div>
    )
}

export default Menu;
