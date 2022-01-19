import Attribution from './Attribution';
import CartMenu from './CartMenu';

const About = ({ cartProducts, deleteProduct, isActive, closeCartMenu }) => {
    return (
        <div className="About">
            <div className="route-page-container" onClick={ closeCartMenu }>
                <h1 className="page-title">About</h1>
                <p className="page-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloremque? Molestiae quae repellendus at eveniet, corrupti numquam, molestias, perspiciatis eligendi blanditiis temporibus odit! Sit veritatis blanditiis accusamus temporibus odio autem, culpa est ipsam quisquam nam cum asperiores fugit provident quas commodi inventore sed repellat eaque sapiente fugiat numquam. Soluta, eveniet.</p>
            </div>
            <CartMenu cartProducts={ cartProducts } deleteProduct={ deleteProduct } isActive={ isActive } />
            <Attribution />
        </div>
    );
}

export default About;