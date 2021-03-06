import minus from "./images/icon-minus.svg";
import plus from "./images/icon-plus.svg";
import cart from "./images/icon-cart.svg";
import "./Quantity.css";

const Quantity = ({ currentQuantity, updateQuantity, addProduct }) => {
    return (
        <section className="Quantity">
            <div className="Quantity__selector">
                <div className="Quantity__selector-minus" onClick={ () => currentQuantity > 0 && updateQuantity(currentQuantity - 1) }>
                    <img src={ minus } alt="minus" />
                </div>
                <div className="Quantity__selector-value">
                    <p>{ currentQuantity }</p>
                </div>
                <div className="Quantity__selector-plus" onClick={ () => updateQuantity(currentQuantity + 1) }>
                    <img src={ plus } alt="plus" />
                </div>
            </div>
            <div className="Quantity__cart" onClick={ () => currentQuantity && addProduct() }>
                <div className="Quantity__cart-icon">
                    <img src={ cart } alt="cart icon" />
                </div>
                <div className="Quantity__cart-text">
                    <p>Add to cart</p>
                </div>
            </div>
        </section>
    );
}
 
export default Quantity;
