import logo from "./images/logo.svg";
import close from "./images/icon-close.svg";
import hamburger from "./images/icon-menu.svg";
import cart from "./images/icon-cart.svg";
import profile from "./images/image-avatar.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ openCartMenu, cartProducts }) => {
    return (
        <nav className="Navbar">
            <div className="Navbar__links-container">
                <div className="Navbar__mobile-nav-container hidden">
                    <div className="Navbar__close-container">
                        <div className="Navbar__close" onClick={ () => document.querySelector(".Navbar__mobile-nav-container").classList.toggle("hidden") }>
                            <img src={ close } alt="close-menu" />
                        </div>
                    </div>
                    <div className="Navbar__contents-container">
                        <Link to="/">Collections</Link>
                        <Link to="/men">Men</Link>
                        <Link to="/women">Women</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
                <div className="Navbar__hamburger" onClick={ () => document.querySelector(".Navbar__mobile-nav-container").classList.toggle("hidden") }>
                    <img src={ hamburger } alt="hamburger-menu" />
                </div>
                <div className="Navbar__title">
                    <img src={ logo } alt="company logo" />
                </div>
                <div className="Navbar__links">
                    <Link to="/">Collections</Link>
                    <Link to="/men">Men</Link>
                    <Link to="/women">Women</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="Navbar__profile-container">
                <div className="Navbar__profile-cart" onClick={ openCartMenu }>
                    <img src={ cart } alt="cart icon" />
                </div>

                {
                    // If one or more cart products exist: show the total product count on the cart icon
                    cartProducts.length > 0 && (
                        <div className="Navbar__cart-count" onClick={ openCartMenu }>
                            <p>{ cartProducts.reduce((previousCount, current) => previousCount + current.quantity, 0) }</p>
                        </div>
                    ) 
                }

                <div className="Navbar__profile-image">
                    <img src={ profile } alt="profile" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
