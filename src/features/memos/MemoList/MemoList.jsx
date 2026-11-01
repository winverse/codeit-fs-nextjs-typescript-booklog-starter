"use client";

import useMemosQuery from "@/features/memos/hooks/useMemosQuery";
import { formatDate } from "@/lib/format";
import * as styles from "./MemoList.css";

function MemoList({ bookId }) {
  const { data: memos, isPending, isError } = useMemosQuery(bookId);

  if (isPending) {
    return <p>메모를 불러오는 중입니다.</p>;
  }

  if (isError) {
    return <p>메모를 불러오지 못했습니다.</p>;
  }

  if (memos.length === 0) {
    return <p>아직 메모가 없습니다.</p>;
  }

  return (
    <ul className={styles.list}>
      {memos.map((memo) => (
        <li key={memo.id} className={styles.item}>
          <p className={styles.text}>{memo.text}</p>
          <p className={styles.meta}>
            {memo.writer} · {formatDate(memo.createdAt)}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default MemoList;
