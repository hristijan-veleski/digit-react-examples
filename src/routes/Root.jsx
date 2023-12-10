import styles from "./Root.module.css";

function Root() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>React Hooks Examples</h2>
      <nav>
        <a className={styles.list_item} href={`/greetings`}>
          <h5 className={styles.list_item__text}>Greetings</h5>
        </a>
        <a href={`/count-and-greetings`} className={styles.list_item}>
          <h5 className={styles.list_item__text}>Count and Greetings</h5>
        </a>
        <a href={`/velocity-example`} className={styles.list_item}>
          <h5 className={styles.list_item__text}>Velocity</h5>
        </a>
        <a href={`/movies`} className={styles.list_item}>
          <h5 className={styles.list_item__text}>Movies</h5>
        </a>
        <a href={`/count-reducer`} className={styles.list_item}>
          <h5 className={styles.list_item__text}>Count Reducer</h5>
        </a>
        <a href={`/count-context`} className={styles.list_item}>
          <h5 className={styles.list_item__text}>Count Context</h5>
        </a>
        <a href={`/blinky-render`} className={styles.list_item}>
          <h5 className={styles.list_item__text}>Blinky Render</h5>
        </a>
        <a href={`/prime-calculator`} className={styles.list_item}>
          <h5 className={styles.list_item__text}>Prime Calculator</h5>
        </a>
      </nav>
    </section>
  );
}

export default Root;
