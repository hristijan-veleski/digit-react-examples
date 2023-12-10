import styles from "./Movies.module.css";
import axios from "axios";

const key = "304537ba";
function getApiEPForMovieName(name) {
  const apiEP = `http://www.omdbapi.com/?apikey=${key}&t=${name}&plot=full`;
  return apiEP;
}

export function getMovieByName(name) {
  return axios({
    method: "GET",
    url: getApiEPForMovieName(name),
  }).then((response) => {
    return response.data;
  });
}

export function Spinner() {
  return <div className={styles.spinner}></div>;
}

export function Error({ error }) {
  return (
    <div className={styles.text_center}>
      <h6>Oops, something went wrong</h6>
      <p>{error}</p>
    </div>
  );
}

export function MovieData({ movie }) {
  return (
    <>
      {movie.Poster && (
        <img src={movie.Poster} alt="poster" className={styles.image} />
      )}
      <div className={styles.description}>
        <h6 className={styles.title}>{movie.Title}</h6>
        <hr className={styles.hr_text} />
        <div className={styles.genre_and_runtime}>
          <span>
            {movie.Runtime} | {movie.Genre}
          </span>
          <span />
        </div>
        <p className={styles.plot}>{movie.Plot}</p>
        <p className={styles.rating}>Rating: {movie.imdbRating}</p>
      </div>
    </>
  );
}
