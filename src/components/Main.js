import React from 'react';
import Card from './main/Card';

const Main = () => {
    return (
        <main>
            <div className="container">
                <h1 className="text-center my-5">Listado de peliculas</h1>
                <div className="row">
                    <div className="card-columns">
                        <Card />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;