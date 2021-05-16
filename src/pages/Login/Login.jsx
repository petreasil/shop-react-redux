import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { ReactComponent as Google } from "../../assets/icons/google.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { connect } from "react-redux";
import { loginUser, loginUserFacebook } from "../../redux/actions/user";

class Login extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="container d-flex flex-column align-items-center justify-content-between">
        <Link to="/">
          <img src={Logo} alt="logo" className="mb-2" />
        </Link>

        <h1 className="h2 text-center">Login</h1>
        <p>Alege providerul cu care vrei să vrei să te loghezi:</p>

        <button
          className="btn btn-outline-dark d-flex align-items-center mb-3"
          onClick={() => this.props.signInWithGoogle()}
        >
          <Google className=" mr-3" />
          <span className="text-nowrap">Loghează-te cu Google</span>
        </button>

        <button
          className="btn btn-outline-dark d-flex align-items-center mb-3"
          onClick={() => this.props.signInFacebook()}
        >
          <Facebook className=" mr-3" />
          <span className="text-nowrap">Loghează-te cu Facebook</span>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signInWithGoogle: () => dispatch(loginUser()),
    signInFacebook: () => dispatch(loginUserFacebook()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
