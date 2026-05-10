import Moviecard from "./MovieCard"

function MovieGrid({movies}){
    if (movies.length === 0) return <p className="text-center text-moon-gray">Movies Not Found</p>
    
    return(
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {movies.map(movie=>(
                    <Moviecard key={movie.id} movie = {movie}/>
                ))}
            </div>
    )
}

export default MovieGrid