import * as styles from "./Panel.css";

function Panel({ title, children }) {
  return (
    <section className={styles.panel}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
}

export default Panel;
