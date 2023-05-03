import React from "react";
import { useLocation } from "wouter"
import useForm from '../hooks/useForm'
import ButtonComponent from "./Button";
import './styles/SearchForm.css'

const RATINGS = ["g", "pg", "pg-13", "r"]

export default function SearchForm({ initialKeyword = '', initialRating = RATINGS[0] }) {
  const [_, pushLocation] = useLocation()

  const {keyword, rating, changeKeyword, changeRating} = useForm({ initialKeyword, initialRating })

  const onSubmit = ({ keyword }) => {
    if (keyword !== '') {
      // navegar a otra ruta
      pushLocation(`/search/${keyword}/${rating}`)
    }
  }

  const handleChange = (evt) => {
    changeKeyword({ keyword: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onSubmit({ keyword })
  }

  const handleChangeRating = (evt) => {
    changeRating({ rating: evt.target.value })
  }

    return (
        <form onSubmit={handleSubmit} className="c-search">
            <ButtonComponent />
            <input 
                className="c-search-input" 
                placeholder="Search a gif here..." 
                onChange={handleChange} 
                type='text' 
                value={keyword} />
            <select className="c-search-list" value={rating} onChange={handleChangeRating}>
                <option disabled>
                    Rating:
                </option>
                {RATINGS.map((rating) => (
                    <option key={rating}>{rating}</option>
                ))}
            </select>
        </form>
    )   
}
/*
    La función React.xsmemo nos permite memorizar un componente. Esto permite a 
    React evitar renderizarlo si sus propiedades no han cambiado, con la 
    consiguiente optimización en lo que a rendimiento se refiere.
*/
//export default React.memo(SearchForm)