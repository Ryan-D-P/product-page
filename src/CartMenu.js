import product1Thumbnail from "./images/image-product-1-thumbnail.jpg";
import product2Thumbnail from "./images/image-product-2-thumbnail.jpg";
import product3Thumbnail from "./images/image-product-3-thumbnail.jpg";
import product4Thumbnail from "./images/image-product-4-thumbnail.jpg";
import deleteIcon from "./images/icon-delete.svg";
import "./CartMenu.css";

// This JSX/HTML is a template demonstration
const CartMenu = (props) => {
    return (
        <div className="CartMenu">
            <h2 className="cart-menu-title">Cart</h2>
            <ul className="cart-items-list">
                <li className="cart-item">
                    <div className="cart-item__image">
                        <img src={product1Thumbnail} alt="item-image" />
                    </div>
                    <div className="cart-item__details">
                        <div className="cart-item__name">
                            <p>Fall Limited Edition Sneakers</p>
                        </div>
                        <div className="cart-item__pricing">
                            <div className="cart-item__quantity">
                                <p>$125.00 x 3</p>
                            </div>
                            <div className="cart-item__total-price">
                                <p>$375.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="cart-item__delete">
                        <img src={deleteIcon} alt="delete" />
                    </div>
                </li>
            </ul>
            <div className="cart-menu-checkout">
                <p>Checkout</p>
            </div>
        </div>
    );
}
 
export default CartMenu;