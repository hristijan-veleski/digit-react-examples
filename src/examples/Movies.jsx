import styles from "./Movies.module.css";

function Movies() {
  function handleTitleChange(event) {
    event.preventDefault();
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
        <div className={styles.content}></div>
      </div>
    </div>
  );
}
export default Movies;
