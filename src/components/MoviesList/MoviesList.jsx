import styles from "./MoviesList.module.css";

const MoviesList = ({allMovies}) => {
    return <div className={styles.movies_list}>
        <ul className={styles.movie}>
        { allMovies?.map((movie) => (
        <li key={movie.Id}>{movie.Title}</li>

        //Future To-Do: Create a proper render of the movie
        // 1)It must contain an img
        // 2)Year of release
        // 3)Poster
        // 4)Title
        // 5)Maybe I forgot something :D
   ))}

    </ul>
    </div>
}

export default MoviesList;