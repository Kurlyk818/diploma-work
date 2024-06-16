import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import tazzaLogo from "../../img/tazza_logo_4.png";
import menu from "../../img/menu.png";
import close from "../../img/close.png";
import arrowDown from "../../img/arrow_down.png";
import arrowUp from "../../img/arrow_up.png";
import cart from "../../img/shopping_cart.png";
import { useWindowDimensions } from "../../js/useWindowDimensions";
import Dropdown from "./Dropdown/Dropdown";
import "./Navbar.css";

const calculateTotalQuantity = (products) => {
    return products.reduce((totalQuantity, product) => {
        return totalQuantity + (product.quantity || 0);
    }, 0);
};

export default function Navbar() {
    const { width } = useWindowDimensions();
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const productsInCart = useSelector(state => state.cart.products);
    const totalQuantity = calculateTotalQuantity(productsInCart);

    const handleOpenMenu = () => setMenuIsOpen(prev => !prev);
    const closeMobileMenu = () => setMenuIsOpen(false);
    const onMouseEnter = () => width < 960 ? setDropdown(false) : setDropdown(true);
    const onMouseLeave = () => setDropdown(false);

    return (
        <>
            <nav className="navbar">
                <NavLink to="/about" className="navbar-logo">
                    <img src={tazzaLogo} alt="A La Tarantazza Logo" />
                </NavLink>
                <div className="menu-icon" onClick={handleOpenMenu}>
                    <img src={menuIsOpen ? close : menu} alt="Open or Close" id="hamburger-menu" />
                </div>
                <ul className={menuIsOpen ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-links" onClick={closeMobileMenu}>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <NavLink to="/menu" className="nav-links" onClick={closeMobileMenu}>
                            Menu <img src={dropdown ? arrowUp : arrowDown} alt="Arrow Down" id="menu-arrow" />
                        </NavLink>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className="nav-item">
                        <NavLink to="/favorites" className="nav-links" onClick={closeMobileMenu}>
                            Favorites
                        </NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink to="/admin" className="nav-links" onClick={closeMobileMenu}>
                            Admin
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/client" className="nav-links" onClick={closeMobileMenu}>
                            Client
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/cart" className="nav-links" onClick={closeMobileMenu}>
                            {width < 960 ? "My Cart" : 
                            <div className="cart-div">
                                <img src={cart} alt="Shopping Cart" id="cart-img"/>
                                {productsInCart.length > 0 ? (
                                    <span>{totalQuantity}</span>
                                ) : null} 
                            </div>}
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}