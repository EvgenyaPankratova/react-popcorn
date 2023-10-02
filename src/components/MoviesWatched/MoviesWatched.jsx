import styles from "./MoviesWatched.module.css";

const MoviesWatched = () => {
    return <div className={styles.movies_watched}>
        <div className={styles.movies_watched_title}>MOVIES YOU WATCHED
        <div className={styles.movies_watched_info}>
            <span><i>🥤</i>2 movies</span>
            <span><i>⭐</i>8.70</span>
            <span><i>🌟</i>8.50</span>
            <span><i>⌛</i>158.5 min</span>
        </div>
        </div>
        
    </div>
}

export default MoviesWatched;