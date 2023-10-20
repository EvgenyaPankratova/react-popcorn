import styles from "./MoviesWatched.module.css";

const MoviesWatched = ({ watched }) => {
    return <div className={styles.movies_watched}>
        <div className={styles.movies_watched_title}>MOVIES YOU WATCHED
        <div className={styles.movies_watched_info}>
            <span>2 movies</span>
            <span>8.70</span>
            <span>8.50</span>
            <span>158.5 min</span>
            <span>{watched}!!!</span>
        </div>
        </div>
        
    </div>
}

export default MoviesWatched;