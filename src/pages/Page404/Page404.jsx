import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

function Page404() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex flex-column justify-content-around align-items-center">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <p>Sorry, an error has occured, Requested page not found!</p>

            <Link to="/" className="btn btn-outline-dark">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Page404;
