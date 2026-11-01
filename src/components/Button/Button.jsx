import * as styles from "./Button.css";

function Button({ variant = "primary", ...restProps }) {
  return <button className={styles.button[variant]} {...restProps} />;
}

export default Button;
