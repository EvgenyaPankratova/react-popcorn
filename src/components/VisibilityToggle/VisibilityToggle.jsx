
import { useState } from "react";
import styles from "./VisibilityToggle.module.css";
import MoviesList from "../MoviesList/MoviesList";

const VisibilityToggle = ({children}) => {

 const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
        <div onClick={() => setIsVisible(!isVisible)}>{isVisible ? '-' : '+'}</div>
        {isVisible && children}
    </div>

  )
}

export default VisibilityToggle;

