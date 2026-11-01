import Link from "next/link";
import { StatusBadge } from "@/features/books/StatusBadge";
import { formatDate, formatRating } from "@/lib/format";
import * as styles from "./BookCard.css";

function BookCard({ book }) {
  return (
    <Link href={`/books/${book.id}`} className={styles.card}>
      <h2 className={styles.title}>{book.title}</h2>
      <p className={styles.author}>{book.author}</p>
      <div className={styles.meta}>
        <StatusBadge status={book.status} />
        <span>{formatRating(book.rating)}</span>
      </div>
      <p className={styles.date}>{formatDate(book.createdAt)} 기록</p>
    </Link>
  );
}

export default BookCard;
