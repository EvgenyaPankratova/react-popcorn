import styles from "./Main.module.css";
import MoviesList from '../MoviesList/MoviesList.jsx';
import MoviesWatched from '../MoviesWatched/MoviesWatched.jsx';

import axios from 'axios';
import VisibilityToggle from "../VisibilityToggle/VisibilityToggle";
// const baseURL = "https://jsonplaceholder.typicode.com/users/1/posts";

//http://www.omdbapi.com/

// useEffect(() => {
//     axios.get(baseURL)
//     .then((response) => { 
//     console.log(response.data)
//     setAllMovies(response.data);
//     })
//     .catch((error) => { 
//     console.error(error);});
// }, [])

const Main = ({ children }) => {
    return <main className={styles.main}>{children}</main>
}

export default Main;