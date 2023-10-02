import styles from "./MoviesListResult.module.css";
import MovieItem from '../MovieItem/MovieItem.jsx';

const MoviesListResult = ({allMovies}) => {
    return <div className={styles.movies_list}>
        <MovieItem allMovies={allMovies}/>
    </div>
}

export default MoviesListResult;