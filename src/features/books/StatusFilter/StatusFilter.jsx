import Link from "next/link";
import { READING_STATUSES, STATUS_LABELS } from "@/constants/books";
import * as styles from "./StatusFilter.css";

function StatusFilter({ current }) {
  return (
    <nav className={styles.filter}>
      <Link href="/" className={current ? styles.link : styles.activeLink}>
        전체
      </Link>
      {READING_STATUSES.map((status) => (
        <Link
          key={status}
          href={`/?status=${status}`}
          className={status === current ? styles.activeLink : styles.link}
        >
          {STATUS_LABELS[status]}
        </Link>
      ))}
    </nav>
  );
}

export default StatusFilter;
