import { MovieCard } from './MovieCard';
// eslint-disable-next-line no-unused-vars
import movies from './peliculas.json';
import styles from './PeliculasGrid.module.css';

export function PeliculasGrid() {
  return (
    <ul className={styles.movieGrid}>
     {movies.map((movie) => (
         <MovieCard key={movie.id} movie={movie} />
     ))}
    </ul>
  );
}
