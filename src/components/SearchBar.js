import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
    return (
        <div className="container my-3">
            <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                    <FaSearch color="#888" />
                </span>
                <input 
                    type="text" 
                    className="form-control border-start-0" 
                    placeholder="Procurar um Praticante"
                />
            </div>
        </div>
    );
}

export default SearchBar;
