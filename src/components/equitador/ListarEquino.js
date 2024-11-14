import React from "react";
import { Link   } from "react-router-dom";
import "./ListarEquino.css";

const ListarEquino = () =>{
    return (
        <div className='mb-4 d-flex justify-content-between align-items-center'>
    <Link to="/cadastrar-equino" className='btnCad-equino btn' role="button" aria-pressed="true">Cadastre um novo Equino</Link>
</div>
    );
}

export default ListarEquino;