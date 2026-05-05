import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import LoadingSpinner from "../components/LoadingSpinner"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL

function DetailPage(){
    const [movie, setMovie] =useState(null)
    const [loading, setLoading] =useState(true)
    const [error, setError] =useState(null)

    const navigate = useNavigate()

    function handleBack(){
        navigate(-1)
    }

    const {id} = useParams()

    useEffect(()=> {
            fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
            .then(res=>{
                if (!res.ok) throw new Error('failed to fetch movies')
                    return res.json()
            })
            .then(data => {
                setMovie(data)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
        }, [id])

        if (loading) return <LoadingSpinner/>
        if(error) return <p className="text-red-400 text-center mt-10">{error}</p>

    return(
        <div>
            <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}
            className="relative w-full h-64 bg-cover bg-center">
                <div className="absolute inset-0 bg-linear-to-t from-space-deep to-transparent">
                </div>
            </div>
            <div className="px-8 py-6 flex gap-6">
                <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} 
                alt="" 
                className="w-32 rounded-lg shadow-lg flex shrink-0"
                />
                <div>
                    <button onClick={handleBack}
                    className="text-moon-gray text-sm mb-4 hover:text-star-white transition-colors
                    cursor-pointer rounded-full bg-space-navy px-3 py-1">
                    ◀️ BACK
                    </button>
                    <h1 className="text-2xl font-bold text-star-white mb-3">{movie.title}</h1>
                    <p className="text-moon-gray text-sm mb-1">Overview</p>
                    <p className="text-moon-gray text-sm leading-relaxed mb-1"> {movie.overview}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {movie.genres.map(genre =>(
                            <span className="text-xs px-3 py-1 rounded-full bg-space-navy text-accent-blue" 
                            key = {genre.id} >
                                {genre.name}</span>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                    <p className="text-star-white font-semibold">
                        <span className="text-accent-gold">★</span>
                        {movie.vote_average.toFixed(1)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailPage