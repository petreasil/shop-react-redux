import React from "react";
import Layout from "../../components/Layout";

const Terms = () => {
  return (
    <Layout>
      <h1 className="text-center">Termeni si Conditii</h1>
      <div className="row">
        <div className="container-fluid container-min-max-width">
          <div className="col-12">
            <h5 className="text-left  mt-2">Termeni Generali</h5>
            <p className="text-muted">
              Lorem ip sum dolor sit amet consectetur adipisicing elit. A,
              provident.
            </p>
          </div>
          <div className="col-12">
            <h5 className="text-left  mt-2">Drepturi de autor</h5>
            <p className="text-muted">
              Lorem ip sum dolor sit amet consectetur adipisicing elit. A,
              provident.
            </p>
          </div>
          <div className="col-12">
            <h5 className="text-left  mt-2">Securitatea datelor personale</h5>
            <p className="text-muted">
              Lorem ip sum dolor sit amet consectetur adipisicing elit. A,
              provident.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
