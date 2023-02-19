import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import imgLink from '../assets/image-product-desktop.jpg';
import './ProductView.scss';

const ProductView = () => {
    return (
        <div className="product-view">
            <img src={imgLink} alt="product-image" className="image" />
            <div className="detail-info">
                <p className="title">perfume</p>
                <p className="name">Gabrielle Essence Eau De Parfum</p>
                <p className="desc">
                    A floral, solar and voluptuous interpretation composed by Olivier Polge,
                    Perfumer-Creator for the House of CHANEL.
                </p>
                <div className="price">
                    <p className="applied-price">$149.99</p>
                    <p className="discount-price">$169.99</p>
                </div>
                <button className="add-to-cart">
                    <FontAwesomeIcon className="shopping-icon" icon={faBagShopping} />
                    <p>Add To Cart</p>
                </button>
            </div>
        </div>
    )
};

export default ProductView;