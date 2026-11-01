"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { TextField } from "@/components/TextField";
import { READING_STATUSES, STATUS_LABELS } from "@/constants/books";
import useCreateBookMutation from "@/features/books/hooks/useCreateBookMutation";
import * as styles from "./BookForm.css";

function BookForm() {
  const router = useRouter();
  const createBookMutation = useCreateBookMutation();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("wish");
  const [rating, setRating] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleRatingChange = (event) => {
    const value = event.target.value;
    setRating(value === "" ? null : Number(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBookMutation.mutate(
      { title, author, status, rating },
      {
        onSuccess: (book) => {
          router.push(`/books/${book.id}`);
        },
      },
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextField label="제목" value={title} onChange={handleTitleChange} />
      <TextField label="저자" value={author} onChange={handleAuthorChange} />
      <label className={styles.field}>
        <span className={styles.label}>읽기 상태</span>
        <select
          className={styles.select}
          value={status}
          onChange={handleStatusChange}
        >
          {READING_STATUSES.map((readingStatus) => (
            <option key={readingStatus} value={readingStatus}>
              {STATUS_LABELS[readingStatus]}
            </option>
          ))}
        </select>
      </label>
      <label className={styles.field}>
        <span className={styles.label}>별점</span>
        <select
          className={styles.select}
          value={rating ?? ""}
          onChange={handleRatingChange}
        >
          <option value="">별점 없음</option>
          {[1, 2, 3, 4, 5].map((score) => (
            <option key={score} value={score}>
              {score}점
            </option>
          ))}
        </select>
      </label>
      {createBookMutation.error && (
        <p className={styles.error}>{createBookMutation.error.message}</p>
      )}
      <Button type="submit" disabled={createBookMutation.isPending}>
        {STATUS_LABELS[status]}에 기록하기
      </Button>
    </form>
  );
}

export default BookForm;
