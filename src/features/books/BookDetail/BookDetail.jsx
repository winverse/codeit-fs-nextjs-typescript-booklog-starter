import { Panel } from "@/components/Panel";
import { StatusBadge } from "@/features/books/StatusBadge";
import { formatDate, formatRating } from "@/lib/format";
import * as styles from "./BookDetail.css";

function BookDetail({ book }) {
  return (
    <Panel title="책 정보">
      <h3 className={styles.title}>{book.title}</h3>
      <dl className={styles.info}>
        <dt>저자</dt>
        <dd>{book.author}</dd>
        <dt>상태</dt>
        <dd>
          <StatusBadge status={book.status} />
        </dd>
        <dt>별점</dt>
        <dd>{formatRating(book.rating)}</dd>
        <dt>기록일</dt>
        <dd>{formatDate(book.createdAt)}</dd>
      </dl>
    </Panel>
  );
}

export default BookDetail;
