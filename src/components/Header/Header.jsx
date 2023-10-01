
import styles from "./Header.module.css";
import Search from '../Search/Search.jsx';

const Header = () => {
    return <header className={styles.header}>
        <div className={styles.header_logo}>🍿usePopcorn</div>
        <Search/>
        <div className={styles.header_count}>Found 10 results</div>
    </header>
}

export default Header;