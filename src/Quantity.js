import minus from "./images/icon-minus.svg";
import plus from "./images/icon-plus.svg";
import cart from "./images/icon-cart.svg";
import "./Quantity.css";

const Quantity = () => {
    return (
        <section className="Quantity">
            <div className="Quantity__selector">
                <div className="Quantity__selector-minus">
                    <img src={minus} alt="minus" />
                </div>
                <div className="Quantity__selector-value">
                    <p>0</p>
                </div>
                <div className="Quantity__selector-plus">
                    <img src={plus} alt="plus" />
                </div>
            </div>
            <div className="Quantity__cart">
                <div className="Quantity__cart-icon">
                    <img src={cart} alt="cart icon" />
                </div>
                <div className="Quantity__cart-text">
                    <p>Add to cart</p>
                </div>
            </div>
        </section>
    );
}
 
export default Quantity;
