import { useState } from "react";
import { NavLink } from "react-router-dom";
import bow from "../../../img/bow_column_2.png";
import twoBow from "../../../img/two_bows.png";
import "./Dropdown.css";


export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenMenu = () => setIsOpen(prev => !prev);

    return (
        <div className="dropdown-container">
            <ul onClick={handleOpenMenu}
                className={isOpen ? "dropdown-menu clicked" : "dropdown-menu"}>
                <li>
                    <img src={bow} alt="Dropdown Ribbon"/>
                </li>
                <li>
                    <NavLink to="/pizza"
                        onClick={() => setIsOpen(false)}
                        className="dropdown-link">
                        Pizza
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/desserts"
                        onClick={() => setIsOpen(false)}
                        className="dropdown-link">
                        Desserts
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/salads"
                        onClick={() => setIsOpen(false)}
                        className="dropdown-link">
                        Salads
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/drinks"
                        onClick={() => setIsOpen(false)}
                        className="dropdown-link">
                        Drinks
                    </NavLink>
                </li>
            </ul>
            <img src={twoBow} alt="Dropdown Ribbon" id="bottom-bows"/>
        </div>
    )
}