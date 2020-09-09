import React from 'react';

const Form = () => {
    return (
        <div className="modal fade" id="crearMovie" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Crear Pelicula</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label for="titulo">Ingresá el titulo</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="title"
                                />
                            </div>
                            <div className="form-group">
                                <label for="rating">Rating</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="rating"
                                />
                            </div>
                            <div className="form-group">
                                <label for="awards">Premios</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="awards"
                                />
                            </div>
                            <div className="form-group">
                                <label for="length">Duración</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="length"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Cargar pelicula</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Form;