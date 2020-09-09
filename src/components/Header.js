import React from 'react';

function Header () {
    return (
        <header>
            <nav className="navbar navbar-light bg-light d-flex justify-content-between">
                <a className="navbar-brand" href="/">Digital Movies</a>
                <form className="form-inline w-50 d-flex justify-content-center">
                    <input className="form-control w-75" type="search" placeholder="Buscá una peli..." aria-label="Search" />
                </form>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#crearMovie">
                    Crear Pelicula
                </button>
            </nav>
        </header>
    )
}

export default Header;