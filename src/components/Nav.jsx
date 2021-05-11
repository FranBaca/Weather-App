import React from 'react'
import SearchBar from "./SearchBar.jsx";
import './Nav.css';
export default function Nav({onSearch}) {
    return (
        <div id="divNav">
            
            <span id="Nombre">Weather-App</span>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}
