import styles from "./MovieItem.module.css";

const MovieItem = ({allMovies}) => {
    return <ul className={styles.movie}>
        <li>some movie</li>
        <li>some movie</li>
        {allMovies.map(elem => {
            return <li key={elem.id}>{elem.id}</li>
        })}
    </ul>
}

export default MovieItem;