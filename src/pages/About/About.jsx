import React from 'react';
import Layout from '../../components/Layout';

function About() {
    return (
        <div>
            <Layout>
                <h1 className="text-center">About</h1>
                <div className="container-fluid container-min-max-width">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-warp ml-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reiciendis molestiae minima porro doloribus esse minus! Corporis dolorem nesciunt esse ullam blanditiis incidunt laborum eos, exercitationem architecto? Perferendis, officia enim.</p>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default About;