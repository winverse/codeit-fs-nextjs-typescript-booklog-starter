import * as styles from "./TextField.css";

function TextField({ label, ...restProps }) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>{label}</span>
      <input className={styles.input} {...restProps} />
    </label>
  );
}

export default TextField;
