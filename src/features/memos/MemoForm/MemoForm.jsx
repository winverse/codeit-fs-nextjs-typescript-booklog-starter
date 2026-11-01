"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/Button";
import { TextField } from "@/components/TextField";
import { useLoginContext } from "@/contexts/LoginContext";
import useAddMemoMutation from "@/features/memos/hooks/useAddMemoMutation";
import * as styles from "./MemoForm.css";

function MemoForm({ bookId }) {
  const { currentUsername } = useLoginContext();
  const addMemoMutation = useAddMemoMutation();
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  if (!currentUsername) {
    return <p>로그인하면 메모를 남길 수 있습니다.</p>;
  }

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMemoMutation.mutate(
      { bookId, text, writer: currentUsername },
      {
        onSuccess: () => {
          setText("");
          inputRef.current.focus();
        },
      },
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextField
        ref={inputRef}
        label={`${currentUsername}님의 메모`}
        value={text}
        onChange={handleTextChange}
      />
      {addMemoMutation.error && (
        <p className={styles.error}>{addMemoMutation.error.message}</p>
      )}
      <Button type="submit" disabled={addMemoMutation.isPending}>
        메모 추가
      </Button>
    </form>
  );
}

export default MemoForm;
