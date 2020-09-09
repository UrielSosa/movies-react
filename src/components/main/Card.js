import React from 'react';

const Card = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title mb-4">Buscando a Nemo</h5>
                <h6 className="card-subtitle mb-2 text-muted mb-2">Rating 10.0</h6>
                <h6 className="card-subtitle mb-2 text-muted">Premios 10</h6>
            </div>
            <div className="card-footer">
                <a href="/" className="card-link">Ir al detalle</a>
            </div>
        </div>
    );
}
 
export default Card;