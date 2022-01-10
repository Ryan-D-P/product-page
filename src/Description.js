import "./Description.css";

const Description = () => {
    return ( 
        <section className="Description">
            <div className="Description__company">
                <h2>sneaker company</h2>
            </div>
            <div className="Description__product-name">
                <h1>Fall Limited Edition Sneakers</h1>
            </div>
            <div className="Description__product-description">
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            </div>
            <div className="Description__price">
                <div className="Description__actual-price-wrapper">
                    <div className="Description__actual-price">
                        <p>$125.00</p>
                    </div>
                    <div className="Description__discount">
                        <p>50%</p>
                    </div>
                </div>
                <div className="Description__original-price">
                    <p>$250.00</p>
                </div>
            </div>
        </section>
    );
}

export default Description;
