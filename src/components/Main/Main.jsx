import styles from "./Main.module.css";
import MoviesListResult from '../MoviesListResult/MoviesListResult.jsx';
import MoviesWatched from '../MoviesWatched/MoviesWatched.jsx';
import { useEffect, useState } from "react";
import axios from 'axios';

const Main = () => {

    const [allMovies, setAllMovies] = useState([]);
    const [search, setSearch] = useState([]);

    const baseURL = "https://jsonplaceholder.typicode.com/users/1/posts";

    useEffect(() => {
        axios.get(baseURL)
        .then((response) => { 
        console.log(response.data)
        setAllMovies(response.data);
        })
        .catch((error) => { 
        console.error(error);});
    }, [])

    return <main className={styles.main}>
        <MoviesListResult allMovies={allMovies}/>
        <MoviesWatched/>
    </main>
}

export default Main;