import { useEffect, useRef, useCallback } from 'react';
import ListOfGifs from '../components/ListOfGifs'
import Spinner from "../components/Spinner";
import { useGifs } from "../hooks/useGifs";
import useNearScreen from "../hooks/useNearScreen"
import debounce from 'just-debounce-it';

export default function SearchResults({params}) {
    
    const {keyword, rating} = params
    const {loading, gifs, setPage} = useGifs({keyword, rating})
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({externalRef : loading ? null: externalRef, once: false})
    
    //const handleNextPage = () => setPage(prevPage => prevPage +1)
    //const handleNextPage = () => console.log("next page")
    
    const debounchHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage +1), 200
    ), [setPage])
    
    useEffect(function(){
        console.log(isNearScreen)
        if(isNearScreen) debounchHandleNextPage()
    }, [debounchHandleNextPage, isNearScreen])

    return <>
        {loading 
            ? <Spinner/> 
            : <>
                <h3 className='App-title'>
                    {decodeURI(keyword)}
                </h3>
                <ListOfGifs gifs={gifs}/>
                <div id='visor' ref={externalRef}></div>
            </>
        }
    </>
}