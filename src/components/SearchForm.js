import React, { useState } from "react";
import ButtonComponent from "./Button";
import './styles/SearchForm.css'

function SearchForm({onSubmit}) {

    const [keyword, setKeyword] = useState('')

    const handleSubmit = evt =>{
        evt.preventDefault()
        //navegar a otra ruta
        onSubmit({keyword})
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="c-search">
            <ButtonComponent />
            <input className="c-search-input" placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
        </form>
    )   
}
/*
    La función React. memo nos permite memorizar un componente. Esto permite a 
    React evitar renderizarlo si sus propiedades no han cambiado, con la 
    consiguiente optimización en lo que a rendimiento se refiere.
*/
export default React.memo(SearchForm)