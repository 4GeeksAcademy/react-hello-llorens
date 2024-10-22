import React from "react";

export const Card = () =>{
    return(
        <div className="card mb-4" style={{ width: "18rem" }}>
            <img src="https://phantom-marca.unidadeditorial.es/69f8894154575e253ad4bf43c8865ef9/resize/828/f/jpg/assets/multimedia/imagenes/2024/10/15/17289905135159.jpg" className="card-img-top" alt="Goku"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};