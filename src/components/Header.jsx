import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { ReactComponent as ShoppingCart } from "../assets/icons/shopping-cart.svg";
import "./Header.css";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/user";

function Header(props) {
  return (
    <header className="border-bottom mb-3">
      <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
        <Link to="/" className="my-1">
          <img src={Logo} alt="Demo Shop" className="logo" />
        </Link>
        <div className="d-flex flex-column">
          {props.user ? <p>Salut, {props.user.displayName}!</p> : null}
          <div className="d-flex justify-content-end">
            {props.user ? (
              <p className="logout h5 " onClick={() => props.signOut()}>
                Delogare
              </p>
            ) : (
              <Link to="/login" className="logout h5 mb-0 p-2">
                Logare
              </Link>
            )}
            <div className="d-flex align-items-center justify-content-between">
              <Link to="/cart" className="logout d-flex">
                <ShoppingCart className="ml-2" />
                <p className="ml-1 mb-0">
                  <span className="badge badge-info">
                    {props.numberOfProducts}
                  </span>
                </p>
              </Link>
              <Link
                className="logout d-flex align-items-center h5 mb-0 p-2"
                to="/favorite"
              >
                {props.favoriteTotal ? (
                  <BsHeartFill value={{ color: "red" }} />
                ) : (
                  <BsHeart />
                )}
                <span className="ml-1">{props.favoriteTotal}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function mapStateToProps(state) {
  return {
    numberOfProducts: state.cart.products.length,
    user: state.user.data,
    favoriteTotal: state.favorite.products.length,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    signOut: () => dispatch(logoutUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
