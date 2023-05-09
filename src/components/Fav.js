//import { useLocation } from "wouter"
import useUser from "../hooks/useUser"
import "./styles/Fav.css"
import { useState } from "react"
import ModalPortal from "./Modal"
import Login from "./Login"

export default function Fav({id}) {
    const {isLogged, addFav, favs} = useUser()
    //const [, navigate] = useLocation()
    const [showModal, setShowmodal] = useState(false)
    const isFaved = favs.some(favId => favId === id)

    const handleClick = () => {
        if(!isLogged) return setShowmodal(true)
        //isFaved ? deleteFav({id}) : addFav({id})
        addFav({id})
    }

    const handleClose = () => {
        setShowmodal(false)
    }

    const handleLogin = () => {
        setShowmodal(false)
    }

    const [label, emoji] = isFaved
        ? ["Remove Gif from favorites", "❌"]
        : ["Add Gif to favorites", "❤️"];

    return (
        <>
            <button className="gf-Fav" onClick={handleClick}>
                <span role="img" aria-label={label}>{emoji}</span>
            </button>
            {showModal && <ModalPortal onClose={handleClose}><Login onLogin={handleLogin}/></ModalPortal>}
        </>
    )
}