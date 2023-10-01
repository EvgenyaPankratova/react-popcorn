
import styles from "./Search.module.css";

const Search = () => {
    return <div className={styles.search}>
        <input 
        className={styles.search_input}
        type="search"
        placeholder="find movie..."
        />
    </div>
}

export default Search;