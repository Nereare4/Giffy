//Objecto inyectable, al que puedes acceder desde cualquier parte de tu arbol 
//de elementos, sin necesidad de usar props

import React from "react"

const Context = React.createContext({
    name: 'esto-es-sin-provider',
    suscribeteAlCanal: true
}) //este el valor que tiene el objeto si intentamos consumirlo y no tenemos acceso

export default Context