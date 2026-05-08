import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

function Moviecard({movie}){

    const cardRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = "fadeInUp 1s ease forwards"
                } else {
                    entry.target.style.animation = "none"
                }
            })
        })

        observer.observe(cardRef.current)

        return()=> observer.disconnect()

    }, [])

    return(
        <Link ref={cardRef} className='block bg-space-card rounded-xl overflow-hidden
        border border-space-navy hover:border-accent-purple transition-all duration-300
        hover:scale-105'
        to={`/movie/${movie.id}`}>
        <img className='w-full aspect-[2/3] object-cover' 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title} />
        <div className='p-3'>
        <h2 className='text-star-white font-semibold text-sm line-clamp-1'>{movie.title}</h2>
        <p className='flex items-center gap-1 mt-1 text-moon-gray text-xs'> 
        <span className='text-accent-gold'>★</span>
            {movie.vote_average.toFixed(1)}</p>
        </div>
        </Link>
    )
}
export default Moviecard