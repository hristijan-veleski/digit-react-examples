import { useState, useEffect } from "react";
import styles from "./Movies.module.css";
import { Error, MovieData, Spinner, getMovieByName } from "./MoviesHelpers";

function MoviesFinal() {
  const [movieName, setMovieName] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieName) {
      return;
    }

    setLoading(true);
    setError(null);
    setMovie(null);

    getMovieByName(movieName)
      .then((data) => {
        if (data.Error) {
          setError(data.Error);
          return;
        }
        setMovie(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieName]);

  function handleTitleChange(event) {
    event.preventDefault();
    setMovieName(event.target.elements.searchInput.value);
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleTitleChange}>
        <input
          id="searchInput"
          name="searchInput"
          className={styles.searchInput}
          placeholder="Search..."
        />
      </form>
      <div className={styles.card}>
        <div className={styles.content}>
          {loading ? (
            <Spinner />
          ) : error ? (
            <Error error={error} />
          ) : movie ? (
            <MovieData movie={movie} />
          ) : (
            <p>Please enter a movie</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default MoviesFinal;
