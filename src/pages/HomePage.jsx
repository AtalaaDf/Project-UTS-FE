import { useEffect, useState } from "react"
import Moviecard from "../components/MovieCard"
import LoadingSpinner from "../components/LoadingSpinner"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL

function HomePage(){
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=> {
        fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
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
    }, [])

    if (loading) return <LoadingSpinner/>
    if (error) return <p className="text-red-400 text-center mt-10">{error}</p>

    return(
        <div className="px-6 py-8">
            <h1 className="text-star-white text-2xl font-bold mb-6">Popular Movies</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {movies.map(movie=>(
                    <Moviecard key={movie.id} movie = {movie}/>
                ))}

            </div>
        </div>
    )
}
export default HomePage