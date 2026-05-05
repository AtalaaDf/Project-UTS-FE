import { Link } from 'react-router-dom'

function Moviecard({movie}){
    return(
        <Link to={`/movie/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.vote_average.toFixed(1)}</p>
        </Link>
    )
}
export default Moviecard