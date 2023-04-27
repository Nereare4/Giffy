import { useContext } from "react"
import GifsContext from "../context/GifsContext"

export default function useGlobalDetails() {
    return useContext(GifsContext).gifs
}