//import { useContext } from "react"
//import StaticContext from '../context/StaticContext'
//import GifsContext from "../context/GifsContext"
import Gif from "../components/Gif"
import useGlobalGifs from "../hooks/useGlobalGifs"

export default function Detail ({params}){
    /*const staticConfig = useContext(StaticContext)
    console.log(staticConfig)
    
    const {gifs} = useContext(GifsContext)
    console.log(gifs)
    */
   
    const gifs = useGlobalGifs()
    console.log(gifs)

    const gif = gifs.find(singleGif => singleGif.id === params.id)
    console.log(gif)
    
    return <Gif {... gif}/>
} 