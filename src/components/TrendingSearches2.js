import { useEffect, useState } from "react";
import getTrendingTerms from "../services/getTrendingTermsService";
import Category from "./Category";

export default function TrendingSearches () {
  const [trends, setTrends] = useState([])

  useEffect(function () {
    const controller = new AbortController()
    getTrendingTerms({signal: controller.signal})
      .then(setTrends)
      .catch(err => {}
    )
    return () => controller.abort()
  }, [])

  return <Category name='Trending Searches' options={trends} />
}
