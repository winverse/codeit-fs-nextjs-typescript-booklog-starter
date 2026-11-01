import { STATUS_LABELS } from "@/constants/books";
import * as styles from "./StatusBadge.css";

function StatusBadge({ status }) {
  return <span className={styles.badge[status]}>{STATUS_LABELS[status]}</span>;
}

export default StatusBadge;
