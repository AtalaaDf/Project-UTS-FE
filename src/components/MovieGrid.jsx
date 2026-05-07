import Moviecard from "./MovieCard"

function MovieGrid({movies}){
    return(
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {movies.map(movie=>(
                    <Moviecard key={movie.id} movie = {movie}/>
                ))}
            </div>
    )
}

export default MovieGrid