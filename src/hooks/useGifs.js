import { useState, useEffect, useContext } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0 

export function useGifs({ keyword, rating } = { keyword : null }) {
    
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setloadingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)
    const {gifs, setGifs} = useContext(GifsContext)
    //const [gifs, setGifs] = useState([])
    //Recuperamos la keyword en el localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'


    useEffect(function(){ //useEffect se ejecuta cada vez que se renderice el componente
        setLoading(true)
        
        getGifs({ keyword: keywordToUse, rating })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                //guardamos la keyword en el localStorage
                localStorage.setItem('lastKeyword', keyword)
            })
    //}, []) //si se ponen los corchetes, sólo se renderiza 1 vez
    }, [keyword, keywordToUse, setGifs, rating]) //cada vez que se cambie la keyword, se renderizará con componente

    useEffect(function (){
        if (page ===INITIAL_PAGE) return 
        setloadingNextPage(true)
        getGifs({keyword: keywordToUse, page, rating}).then(nextGifs => {
            setGifs(prevGifs => prevGifs.concat(nextGifs))
            setloadingNextPage(false)
        })
    }, [keywordToUse, page, rating, setGifs])

    return {loading, loadingNextPage, gifs, setPage}
}