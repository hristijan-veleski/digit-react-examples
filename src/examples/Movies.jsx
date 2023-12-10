import { useEffect } from "react";
import styles from "./Movies.module.css";
import { Error, MovieData, Spinner, getMovieByName } from "./MoviesHelpers";
import { useReducer } from "react";

function movieReducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        movieName: state.movieName,
        movie: null,
        error: null,
        loading: true,
      };
    case "UPDATE_MOVIE":
      return {
        movieName: state.movieName,
        movie: action.payload,
        error: null,
        loading: false,
      };
    case "ERROR":
      console.log("This runs", action.payload);
      return {
        movieName: state.movieName,
        movie: null,
        error: action.payload,
        loading: false,
      };
    case "UPDATE_MOVIE_NAME":
      return {
        movieName: action.payload,
        movie: null,
        error: null,
        loading: false,
      };
    default:
      break;
  }
}

function Movies() {
  const [state, dispatch] = useReducer(movieReducer, {
    movieName: "",
    movie: null,
    error: null,
    loading: false,
  });
  const { movieName, error, loading, movie } = state;

  useEffect(() => {
    if (!movieName) {
      return;
    }

    dispatch({ type: "LOADING" });
    getMovieByName(movieName).then((data) => {
      if (data.Error) {
        dispatch({ type: "ERROR", payload: data.Error });
        return;
      }
      dispatch({ type: "UPDATE_MOVIE", payload: data });
    });
  }, [movieName]);

  function handleTitleChange(event) {
    event.preventDefault();
    dispatch({
      type: "UPDATE_MOVIE_NAME",
      payload: event.target.elements.searchInput.value,
    });
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
export default Movies;
