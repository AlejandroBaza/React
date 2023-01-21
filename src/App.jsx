import { PeliculasGrid } from "./PeliculasGrid";
import styles from './App.module.css'

export function App(){
    return <div>
        <header>
            <h1 className={styles.title}>ZONA CERO</h1>
        </header>
        <main>
        <PeliculasGrid /> 
        </main>
        </div>;
}
