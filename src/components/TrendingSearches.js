import React, {Suspense} from "react";
import useNearScreen from "../hooks/useNearScreen";
import Spinner from "./Spinner";

const TrendingSearches = React.lazy(
    () => import('./TrendingSearches2')
  )
  
  export default function LazyTrending () {
    const {isNearScreen, fromRef} = useNearScreen({
      distance: '10px'
    })
  
    return <div ref={fromRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingSearches /> : <Spinner />}
      </Suspense>
    </div>
  }