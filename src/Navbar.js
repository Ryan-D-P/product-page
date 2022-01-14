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
                        <div className="Navbar__close"  onClick={ () => document.querySelector(".Navbar__mobile-nav-container").classList.toggle("hidden") }>
                            <img src={ close } alt="close-menu" />
                        </div>
                    </div>
                    <div className="Navbar__contents-container">
                        {/* <Link to="/">Collections</Link> */}
                        <div><a href="/">Collections</a></div>
                        <div><a href="/">Men</a></div>
                        <div><a href="/">Women</a></div>
                        <div><a href="/">About</a></div>
                        <div><a href="/">Contact</a></div>
                    </div>
                </div>
                <div className="Navbar__hamburger" onClick={ () => document.querySelector(".Navbar__mobile-nav-container").classList.toggle("hidden") }>
                    <img src={ hamburger } alt="hamburger-menu" />
                </div>
                <div className="Navbar__title">
                    <img src={ logo } alt="company logo" />
                </div>
                <div className="Navbar__links">
                    {/* <Link to="/">Collections</Link> */}
                    <a href="/">Collections</a>
                    <a href="/">Men</a>
                    <a href="/">Women</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </div>
            </div>
            <div className="Navbar__profile-container">
                <div className="Navbar__profile-cart" onClick={ openCartMenu }>
                    <img src={ cart } alt="cart icon" />
                </div>

                { cartProducts.length > 0 && (
                    <div className="Navbar__cart-count">
                        <p>{ cartProducts.length }</p>
                    </div>
                ) }
                
                <div className="Navbar__profile-image">
                    <img src={ profile } alt="profile-image" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
