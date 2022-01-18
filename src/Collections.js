import Attribution from './Attribution';
import Description from './Description';
import Gallery from './Gallery';
import Quantity from './Quantity';
import CartMenu from './CartMenu';

const Collections = ({ closeCartMenu, currentQuantity, updateQuantity, addProduct, cartProducts, deleteProduct, isActive }) => {
    return (
        <div className="Collections">
            <div className="container" onClick={ closeCartMenu }>
                <div className="container__column1">
                    <Gallery />
                </div>
                <div className="container__column2">
                    <Description />
                    <Quantity currentQuantity={ currentQuantity } updateQuantity={ updateQuantity } addProduct={ addProduct } />
                </div>
            </div>
            <CartMenu cartProducts={ cartProducts } deleteProduct={ deleteProduct } isActive={ isActive } />
            <Attribution />
        </div>
    );
}

export default Collections;
