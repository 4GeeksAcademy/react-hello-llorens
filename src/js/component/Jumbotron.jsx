import React from "react";

export const Jumbotron_web = () => {
    return (
        <div className="p-5 mb-4 bg-info-subtle rounded-3"> 
            <div className="container-fluid py-5 text-start">
                <h1 className="display-1 fw-bold">A Warm Welcome</h1>
                <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                <button className="btn btn-primary btn-lg" type="button">Call to Activate</button>
            </div>
        </div>
    );
};