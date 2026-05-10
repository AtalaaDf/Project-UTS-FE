import { useEffect, useState, useRef } from "react"
import HeroSection from "../components/section/HeroSection"
import MovieGrid from "../components/MovieGrid"
import SearchBar from "../components/SearchBar"
import PopularSection from "../components/section/PopularSection"
import DiscoverSection from "../components/section/DiscoverSection"
import LoadingSpinner from "../components/LoadingSpinner"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL

function HomePage(){
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const gridRef = useRef(null)
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(()=>{
            if (searchQuery === "") {
                setLoading(false)
                    return
            }
            fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&page=1`)
            .then(res=>{
                if (!res.ok) throw new Error('failed to fetch movies')
                    return res.json()
            })
            .then(data => {
                setMovies(data.results)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
        }, [searchQuery])

    useEffect(()=>{
        document.title = "Movie"
    }, [])

    if (loading) return <LoadingSpinner/>
    if (error) return <p className="text-red-400 text-center mt-10">{error}</p>

    return(
        <div className="px-6 py-8">
            <SearchBar onSearch={setSearchQuery}/>
            {searchQuery ? (
            <MovieGrid movies={movies}/>
            ) : (
            <>
            <HeroSection gridRef = {gridRef}/>
            <PopularSection/>
            <DiscoverSection/>
            </>
            )}

        </div>
    )
}
export default HomePage