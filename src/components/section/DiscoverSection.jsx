import { useEffect, useState } from "react"
import LoadingSpinner from "../LoadingSpinner"
import MovieGrid from "../MovieGrid"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL

function DiscoverSection(){
    const [movies, setMovies] = useState([])
    const [sortBy, setSortBy] = useState("title.asc")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=${sortBy}&language=en-US&page=1`)
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
    }, [sortBy])

    if (loading) return <LoadingSpinner/>
    if (error) return <p className="text-red-400 text-center mt-10">{error}</p>

    return(
        <div className="px-6 py-8">
            <h1 className="text-star-white text-2xl font-bold mb-6">Discover Movies</h1>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}
                className="bg-space-card text-star-white border border-space-navy rounded-lg
                px-3 py-2 mb-6 focus:outline-none focus:border-accent-purple cursor-pointer">
                <option value="title.asc">A-Z</option>
                <option value="title.desc">Z-A</option>
            </select>
            <MovieGrid movies={movies}/>
        </div>
    )
}
export default DiscoverSection