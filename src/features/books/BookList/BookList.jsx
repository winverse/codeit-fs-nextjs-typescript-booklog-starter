import { BookCard } from "@/features/books/BookCard";
import * as styles from "./BookList.css";

function BookList({ books }) {
  if (books.length === 0) {
    return <p>기록한 책이 없습니다.</p>;
  }

  return (
    <ul className={styles.list}>
      {books.map((book) => (
        <li key={book.id}>
          <BookCard book={book} />
        </li>
      ))}
    </ul>
  );
}

export default BookList;
