import product1Thumbnail from "./images/image-product-1-thumbnail.jpg";
import deleteIcon from "./images/icon-delete.svg";
import "./CartMenu.css";

const CartMenu = ({ cartProducts, deleteProduct }) => {
    return (
        <div className="CartMenu">
            <h2 className="cart-menu-title">Cart</h2>
            <ul className="cart-items-list">
                { cartProducts.map((product) => (
                    <li className="cart-item" ley={ product.id }>
                        <div className="cart-item__image">
                            <img src={ product1Thumbnail } alt="item-image" />
                        </div>
                        <div className="cart-item__details">
                            <div className="cart-item__name">
                                <p>{ product.name }</p>
                            </div>
                            <div className="cart-item__pricing">
                                <div className="cart-item__quantity">
                                    <p>{ `$${product.price} x ${product.quantity}` }</p>
                                </div>
                                <div className="cart-item__total-price">
                                    <p>{ `$${product.price * product.quantity}` }</p>
                                </div>
                            </div>
                        </div>
                        <div className="cart-item__delete">
                            <img src={ deleteIcon } alt="delete" onClick={() => deleteProduct(product.id)} />
                        </div>
                    </li>
                )) }
            </ul>
            <div className="cart-menu-checkout">
                <p>Checkout</p>
            </div>
        </div>
    );
}
 
export default CartMenu;