import React from "react";
import "./ProductItem.css";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cart";
import { Link } from "react-router-dom";
import { addToFavorite } from "../redux/actions/favorite";
import Zoom from "react-reveal/Zoom";

function ProductItem(props) {
  const { name, price, currency, image, id } = props;

  return (
    <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
      <Link
        to={`/product/${id}`}
        className="d-flex flex-column align-items-center"
      >
        <img src={image} alt="productPhoto" className="mb-2" />
        <Zoom left cascade>
          <p className="mb-1 text-center">{name}</p>
          <p className="text-center">{price + currency}</p>
        </Zoom>
      </Link>
      <div className="d-flex flex-column">
        <button
          className="btn btn-outline-dark mb-2"
          onClick={() =>
            props.addToFavorite({
              product: {
                id,
                name,
                price,
                currency,
                image,
              },
            })
          }
        >
          Adauga la Favorite
        </button>

        <button
          className="btn btn-outline-dark"
          onClick={() =>
            props.addToCart({
              product: {
                id,
                name,
                price,
                currency,
                image,
              },
            })
          }
        >
          Adaugă în coș
        </button>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    addToFavorite: (product) => dispatch(addToFavorite(product)),
  };
}

export default connect(null, mapDispatchToProps)(ProductItem);
